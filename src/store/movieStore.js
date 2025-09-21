import { create } from "zustand";
// import { persist, createJSONStorage } from "zustand/middleware";
import {
  getMovies,
  getMyList,
  addMovieToList,
  removeMovieFromList,
  updateWatchedStatus,
} from "../services/api";

export const useMovieStore = create(
  (set, get) => ({
    // --- STATE ---
    allMovies: [],
    myMovieList: [],
    selectedMovie: null,
    loading: true,
    error: null,
    notification: { isVisible: false, message: "", type: "success" },

    // --- Actions ---
    // Get All Movies Data
    fetchAllMovies: async () => {
      try {
        set({ loading: true, error: null });
        const movies = await getMovies();
        set({ allMovies: movies, loading: false });
      } catch (err) {
        set({ error: "Gagal memuat data film.", loading: false });
        console.log("Gagal memuat data film", err);
      }
    },

    fetchMyList: async () => {
      try {
        console.log("Mencoba mengambil data MyList dari API...");
        const list = await getMyList();
        console.log("Data MyList yang diterima dari API:", list);
        set({ myMovieList: list });
      } catch (err) {
        console.error("Gagal memuat MyList:", err);
      }
    },

    // --- MyList ---
    // Add Movie To MyList
    addToMyList: async (movie) => {
      const { myMovieList, showNotification, fetchMyList } = get();
      console.log("myMovieList:", myMovieList);
      if (!myMovieList.find((item) => item.movieId == movie.id)) {
        const newItem = { movieId: movie.id, isWatched: false };
        console.log("newItem1:", newItem);
        try {
          await addMovieToList(newItem); //Tunggu API selesai
          console.log("newItem2:", newItem);
          await fetchMyList(); // Ambil data terbaru dari server
          showNotification("Film berhasil ditambahkan");
        } catch (error) {
          showNotification("Gagal menambahkan film", "error");
        }
      } else {
        showNotification("Film sudah ada di daftar", "info");
      }
    },

    // Remove Movie From MyList
    removeFromMyList: async (movie) => {
      const { myMovieList, showNotification, fetchMyList } = get();

      // Pastikan myMovieList tidak kosong sebelum mencari
      // if (!myMovieList || myMovieList.length === 0) {
      //   showNotification("Daftar film belum termuat", "error");
      //   return;
      // }

      const itemToRemove = myMovieList.find(
        (item) => String(item.movieId) === String(movie.id)
      );
      // console.log("itemToRemove:", itemToRemove);
      // console.log("itemToRemove.movieId:", itemToRemove.movieId);
      if (itemToRemove && itemToRemove.id) {
        try {
          // Gunakan 'itemToRemove.id' (ID unik dari MockAPI) untuk menghapus
          await removeMovieFromList(itemToRemove.id);
          await fetchMyList(); //ambil data terbaru+
          showNotification("Film berhasil dihapus dari My List", "success");
        } catch (error) {
          showNotification("Gagal menghapus film", "error");
        }
      } else {
        console.error(
          "Gagal menemukan item untuk dihapus di MyList. Cek data:",
          movie,
          myMovieList
        );
        showNotification(
          "Gagal menghapus, film tidak ditemukan di daftar",
          "error"
        );
      }
    },

    // Update/Toggle Watch Status
    toggleWatchedStatus: async (movie) => {
      const { myMovieList, showNotification, fetchMyList } = get();

      // if (!myMovieList || myMovieList.length === 0) {
      //   showNotification("Daftar film belum termuat", "error");
      //   return;
      // }

      const itemToUpdate = myMovieList.find(
        // (item) => item.movieId == movie.id
        (item) => String(item.movieId) === String(movie.id)
      );
      console.log("itemToUpdate:", itemToUpdate);
      console.log("itemToUpdate.movieId:", itemToUpdate.movieId);

      if (itemToUpdate && itemToUpdate.id) {
        try {
          //Kirim status kebalikan ke API
          const updatedData = { isWatched: !itemToUpdate.isWatched };
          await updateWatchedStatus(itemToUpdate.id, updatedData);
          await fetchMyList();
          showNotification("Status film berhasil diubah", "success");
        } catch (error) {
          showNotification("Gagal memperbarui status film", "error");
        }
      } else {
        console.error(
          "Gagal menemukan item untuk diupdate di MyList. Cek data:",
          movie,
          myMovieList
        );
        showNotification(
          "Gagal mengubah status, film tidak ditemukan di daftar",
          "error"
        );
      }
    },
    // --- MyList End ---

    // Modal Actions
    handleMovieClick: (movie) => set({ selectedMovie: movie }),
    handleCloseModal: () => set({ selectedMovie: null }),

    // Notification action
    showNotification: (message, type = "success") => {
      set({ notification: { isVisible: true, message, type } });
      setTimeout(() => {
        set({
          notification: { isVisible: false, message: "", type: "success" },
        });
      }, 3000);
    },
  })
  // {
  //   name: "movie-watchlist-storage", //nama key local storage
  //   // Hanya simpan 'myMovieList', jangan simpan data lain seperti 'allMovies'
  //   storage: createJSONStorage(() => sessionStorage), // Simpan di session storage untuk sementara
  //   partialize: (state) => ({ myMovieList: state.myMovieList }),
  // }
);
