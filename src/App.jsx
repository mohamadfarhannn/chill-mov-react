import { Routes, Route } from "react-router";
import { useState, useEffect, useRef } from "react";
import WrapPage from "./WrapPage.jsx";
import Homepage from "./components/5-pages/Homepage.jsx";
import Login from "./components/5-pages/Login.jsx";
import Register from "./components/5-pages/Register.jsx";
import Series from "./components/5-pages/Series.jsx";
import Film from "./components/5-pages/Film.jsx";
import MyList from "./components/5-pages/MyList.jsx";
import Toast from "./components/1-atoms/Toast.jsx";

// import data
import { allMovies } from "./data/movies.js";

function App() {
  // Modal
  // Show Movie Detail
  const [selectedMovie, setSelectedMovie] = useState(null);
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };
  // Close modal
  const handleCloseModal = () => {
    setSelectedMovie(null);
  };
  // Modal End

  // State untuk simpan value
  const [myMovieList, setMyMovieList] = useState(() => {
    // Cek apakah ada data 'myList' di Local Storage
    const savedList = localStorage.getItem("myMovieList");
    // Jika ada, ubah dari string kembali menjadi array. Jika tidak, mulai dengan array kosong.
    return savedList ? JSON.parse(savedList) : [];
  });

  useEffect(() => {
    // Efek ini akan berjalan setiap kali 'myListIds' berubah
    localStorage.setItem("myMovieList", JSON.stringify(myMovieList));
  }, [myMovieList]); // memberitahu useEffect untuk mengawasi myListIds
  // State untuk simpan value End

  // Toast (Notification Popup)
  // State for controlling notification popup
  const [notification, setNotification] = useState({
    isVisible: false,
    message: "",
    type: "success",
  });
  // UseRef for Save timer id
  const notificationTimerRef = useRef(null);

  // Show notification function
  const showNotification = (message, type = "success") => {
    // delete old timer
    if (notificationTimerRef.current) {
      clearTimeout(notificationTimerRef.current);
    }
    // Set state notification true for showing
    setNotification({ isVisible: true, message: message, type: type });
    // timer for hide notification after 3s
    notificationTimerRef.current = setTimeout(() => {
      setNotification({ isVisible: false, message: "", type: "success" });
    }, 3000);
  };
  // Toast End

  // Add to my list
  const addToMyList = (movie) => {
    // Cek duplikat menggunakan variabel yang benar ('m' kecil)
    if (!myMovieList.find((item) => item.id === movie.id)) {
      // 1. Buat item baru DENGAN id
      const newItem = { id: movie.id, isWatched: false };

      // 2. Tambahkan variabel 'newItem' tersebut ke dalam state
      setMyMovieList((prevList) => [...prevList, newItem]);

      console.log(`Film dengan ID ${movie.id} berhasil ditambahkan.`);
      showNotification("Film berhasil ditambahkan ke daftar saya");
    }
  };
  // Old code add to my list
  // const addToMyList = (movie) => {
  //   // cek id agar tidak duplikat
  //   if (!myMovieList.find((item) => item.id === movie.id)) {
  //     const newItem = { id: movie.id, isWatched: false };
  //     // tambahkan id baru kedalam array state
  //     setMyMovieList((prevList) => [...prevList, newItem]);
  //     console.log(`Film dengan ID ${movie.id} berhasil ditambahkan.`);
  //   }
  // };

  // Delete from my list
  const removeFromMyList = (movieId) => {
    // Buat array baru yang tidak berisi ID yang akan dihapus
    setMyMovieList((prevList) =>
      prevList.filter((item) => item.id !== movieId)
    );
    showNotification("Film dihapus dari daftar saya", "error");
  };

  // Update film status isWatched
  const toggleWatchedStatus = (movieId) => {
    setMyMovieList((prevList) =>
      prevList.map((item) =>
        // item.id === movieId ? ... : item > Jika item yang sedang di-loop adalah film yang ingin diubah,
        // { ...item, isWatched: !item.isWatched } : item > Buat objek baru dengan semua properti lama (...item), tetapi ganti nilai isWatched dengan kebalikannya (!item.isWatched), Jika bukan film yang dicari, kembalikan item tersebut tanpa perubahan..
        item.id === movieId ? { ...item, isWatched: !item.isWatched } : item
      )
    );
  };
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <WrapPage
              allMovies={allMovies}
              myMovieList={myMovieList}
              addToMyList={addToMyList}
              removeFromMyList={removeFromMyList}
              selectedMovie={selectedMovie}
              handleMovieClick={handleMovieClick}
              handleCloseModal={handleCloseModal}
              toggleWatchedStatus={toggleWatchedStatus}
            />
          }
        >
          <Route index element={<Homepage />} />
          <Route path="series" element={<Series />} />
          <Route path="film" element={<Film />} />
          <Route path="mylist" element={<MyList />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Toast
        message={notification.message}
        isVisible={notification.isVisible}
        type={notification.type}
      />
    </>
  );
}

export default App;
