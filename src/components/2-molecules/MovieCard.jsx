import Badge from "../1-atoms/Badge.jsx";
import MovieInfo from "../1-atoms/MovieInfo.jsx";
const MovieCard = ({ movie, movieBadge = false, movieInfo = false }) => {
  //   const renderMovieBadge = () => {
  //     movieBadge === "true" ? <Badge type={movie.badge} /> : "";
  //   };

  //   const renderMovieInfo = () => {
  //     movieInfo === "true" ? (
  //       <MovieInfo title={movie.title} rating={movie.rating} />
  //     ) : (
  //       ""
  //     );
  //   };
  return (
    <div className="poster-card relative rounded-lg overflow-hidden cursor-pointer">
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-full object-cover"
      />
      {movieBadge && <Badge type={movie.badge} />}

      {movieInfo && <MovieInfo title={movie.title} rating={movie.rating} />}

      {/* {renderMovieBadge()}
      {renderMovieInfo()} */}
    </div>
  );
};

export default MovieCard;
