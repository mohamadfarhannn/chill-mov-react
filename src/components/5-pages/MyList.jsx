import { useOutletContext } from "react-router-dom";
import MovieListSection from "../4-templates/MovieList";
import MovieCard from "../2-molecules/MovieCard";
import MovieDetailModal from "../4-templates/MovieDetailModal";

const MyList = () => {
  // Ambil myMovieList dari induk
  const {
    allMovies,
    myMovieList,
    selectedMovie,
    handleMovieClick,
    handleCloseModal,
    addToMyList,
    removeFromMyList,
    toggleWatchedStatus,
  } = useOutletContext();

  // Split into watched and unwatched
  const watchedList = myMovieList.filter((item) => item.isWatched);
  const unWatchedList = myMovieList.filter((item) => !item.isWatched);

  // get data movies based on id
  const getMoviesFromIds = (list) => {
    const ids = list.map((item) => item.id);
    return allMovies.filter((movie) => ids.includes(movie.id));
  };

  return (
    <main className="flex flex-col flex-wrap w-full min-h-screen pb-15 bg-[#181A1C]">
      <MovieListSection sectionTitle="Daftar Film Saya">
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {getMoviesFromIds(unWatchedList).map((movieInList) => (
            <div
              key={movieInList.id}
              onClick={() => handleMovieClick(movieInList)}
            >
              <MovieCard
                movie={movieInList}
                imgSrc={movieInList.poster.portrait}
                movieBadge={true}
              />
            </div>
          ))}
        </div>
      </MovieListSection>

      {/* Sudah Selesai Menonton */}
      <MovieListSection sectionTitle="Film Sudah Ditonton">
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {getMoviesFromIds(watchedList).map((movieInList) => (
            <div
              key={movieInList.id}
              onClick={() => handleMovieClick(movieInList)}
            >
              <MovieCard
                movie={movieInList}
                imgSrc={movieInList.poster.portrait}
                movieBadge={true}
                isWatched={true}
              />
            </div>
          ))}
        </div>
      </MovieListSection>

      {/* Modal Detail Movie */}
      {selectedMovie && (
        <MovieDetailModal
          movie={selectedMovie}
          onClose={handleCloseModal}
          allMovies={allMovies}
          myMovieList={myMovieList}
          addToMyList={addToMyList}
          removeFromMyList={removeFromMyList}
          toggleWatchedStatus={toggleWatchedStatus}
        />
      )}
      {/* Modal Detail Movie End */}

      {/* Old filter and loop data from allMovies */}
      {/* <MovieListSection sectionTitle="Daftar Film Saya">
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {allMovies
            //Karena state sekarang adalah array of object (contoh: [{ id: 1, isWatched: false }]), sehingga tidak bisa lagi menggunakan myMovieList.includes(movie.id).
            // memeriksa setiap item di dalam myMovieList dan mengembalikan true jika ada setidaknya satu item yang id-nya cocok dengan movie.id
            .filter((movie) => myMovieList.some((item) => item.id === movie.id))
            .map((movieInList) => (
              <div
                key={movieInList.id}
                onClick={() => handleMovieClick(movieInList)}
              >
                <MovieCard
                  movie={movieInList}
                  imgSrc={movieInList.poster.portrait}
                  movieBadge={true}
                />
              </div>
            ))}
        </div>
      </MovieListSection> */}
    </main>
  );
};
export default MyList;
