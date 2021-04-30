import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ movie, genres, onDetails }) => {
  const img = `http://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  let movieGenres = movie.genre_ids.map((id) => {
    let name;
    genres.map((genre) => {
      if (genre.id == id) {
        name = genre.name;
        return name;
      }
    });
    return name;
  });

  return movie.poster_path ? (
    <div className="movie">
      <div className="images">
        <img width="200" src={img} alt="Title" />
        <div className="movie-overlay">
          <p>{movie.vote_average} / 10</p>
          <h5>
            {movieGenres[0]} <br></br> {movieGenres[1]}
          </h5>
          <Link to={"/" + movie.title}>
            <button onClick={() => onDetails(movie, movieGenres, movie.title)}>
              Details
            </button>
          </Link>
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
