import "../css/App.css";
import { useEffect, useState } from "react";

import MovieList from "./movie-list";

const MOVIE_API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=c9a37db220f30fead3da528299127d84&language=en-US&page=1";
const GENRE_API_URL =
  "https://api.themoviedb.org/3/genre/movie/list?&api_key=c9a37db220f30fead3da528299127d84";

const Home = ({
  setSelectedDetails,
  setSelectedPath,
  setSelectedGenres,
  setMovies,
  movies,
  setLoading,
  loading,
  errorMessage,
  searchLoading,
}) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    if (searchLoading !== 0) {
    } else {
      fetch(MOVIE_API_URL)
        .then((response) => response.json())
        .then((jsonResponse) => {
          setMovies(jsonResponse.results);
          setLoading(false);
        });

      fetch(GENRE_API_URL)
        .then((response1) => response1.json())
        .then((jsonResponse1) => {
          setGenres(jsonResponse1.genres);
        });
    }
  }, [setMovies, setLoading, searchLoading]);

  const onDetails = (movie, movieGenres, pathTitle) => {
    setSelectedDetails(movie);
    setSelectedGenres(movieGenres);
    setSelectedPath(pathTitle);
  };

  return (
    <div className="App">
      <div className="bg-image"></div>

      {loading && !errorMessage ? (
        <span>loading...</span>
      ) : errorMessage ? (
        <div className="errorMessage">{errorMessage}</div>
      ) : (
        <MovieList movies={movies} genres={genres} onDetails={onDetails} />
      )}
    </div>
  );
};

export default Home;
