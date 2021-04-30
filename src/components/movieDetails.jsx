import React from "react";

const MovieDetails = ({ movie, genres }) => {
  const img = `http://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <div className="container">
      <div className="col">
        <img width="250" src={img} alt="Title" />
      </div>
      <div className="col">
        <h1>{movie.title}</h1>
        <h2>{genres.map((g, index) => (index ? " / " : "") + g)}</h2>
        <h2>
          {movie.release_date
            ? movie.release_date.slice(0, 4)
            : movie.release_date}
        </h2>
        <h2>Rate: {movie.vote_average}/10</h2>
        <h4> {movie.overview}</h4>
      </div>
    </div>
  );
};

export default MovieDetails;
