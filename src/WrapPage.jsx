import { Outlet } from "react-router";
import Container from "./components/5-pages/Container";
const WrapPage = ({
  allMovies,
  myMovieList,
  addToMyList,
  removeFromMyList,
  selectedMovie,
  handleMovieClick,
  handleCloseModal,
  toggleWatchedStatus,
}) => {
  return (
    <Container>
      {/* Meneruskan props ke semua child melalui context */}
      <Outlet
        context={{
          allMovies,
          myMovieList,
          addToMyList,
          removeFromMyList,
          selectedMovie,
          handleMovieClick,
          handleCloseModal,
          toggleWatchedStatus,
        }}
      />
    </Container>
  );
};

export default WrapPage;
