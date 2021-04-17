import "../css/App.css";
import Header from "./header";
import Movie from "./movie";
import { useEffect, useState, createContext } from "react";

const MOVIE_API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=c9a37db220f30fead3da528299127d84&language=en-US&page=1";

export const SearchContext = createContext();

const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [homeClick, setHomeClick] = useState(0);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setMovies(jsonResponse.results);
        setLoading(false);
      });
  }, [homeClick]);

  const searchFun = (searchValue) => {
    setLoading(true);
    setErrorMessage(null);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=c9a37db220f30fead3da528299127d84&language=en-US&query=${searchValue}&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.total_results >= 1) {
          setMovies(jsonResponse.results);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  };

  console.log(movies);

  return (
    <div className="App">
      <div className="bg-image"></div>
      <SearchContext.Provider value={searchFun}>
        <Header
          text="Movies Search"
          click={homeClick}
          setHome={setHomeClick}
        ></Header>
      </SearchContext.Provider>

      {/* <Search search={search} />  */}

      <div className="movies">
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
