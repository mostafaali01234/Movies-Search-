import React from "react";

const Movie = ({ movie }) => {
  const img = `http://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return movie.poster_path ? (
    <div className="movie">
      <div className="images">
        <img width="200" src={img} alt="Title" />
        <div className="movie-overlay">
          <p>{movie.vote_average} / 10</p>
          <button>Details</button>
        </div>
      </div>

      <h4>{movie.title}</h4>
      <p>
        {movie.release_date
          ? movie.release_date.slice(0, 4)
          : movie.release_date}
      </p>
    </div>
  ) : null;
};

export default Movie;
