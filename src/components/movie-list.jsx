import Movie from "./movie";

const MovieList = ({ movies, genres, onDetails }) => {
  return (
    <div className="movies">
      {movies.map((movie, index) => (
        <Movie
          key={`${index}-${movie.Title}`}
          movie={movie}
          genres={genres}
          onDetails={onDetails}
        />
      ))}
    </div>
  );
};

export default MovieList;
