import "../css/App.css";
import Header from "./header";
import Movie from "./movie";
import { useEffect, useState, createContext } from "react";
import MovieDetails from "./movieDetails";
import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";

const MOVIE_API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=c9a37db220f30fead3da528299127d84&language=en-US&page=1";
const GENRE_API_URL =
  "https://api.themoviedb.org/3/genre/movie/list?&api_key=c9a37db220f30fead3da528299127d84";

export const SearchContext = createContext();

const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [homeClick, setHomeClick] = useState(0);
  const [selectedDetails, setSelectedDetails] = useState();
  const [selectedPath, setSelectedPath] = useState();
  const [selectedGenres, setSelectedGenres] = useState();

  useEffect(() => {
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

  const onDetails = (movie, movieGenres, pathTitle) => {
    setSelectedDetails(movie);
    setSelectedGenres(movieGenres);
    setSelectedPath(pathTitle);
  };

  // console.log(selectedDetails);

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

      <Switch>
        <Route
          exact
          path="/Movies-Search-/"
          render={() => (
            <div className="movies">
              {loading && !errorMessage ? (
                <span>loading...</span>
              ) : errorMessage ? (
                <div className="errorMessage">{errorMessage}</div>
              ) : (
                movies.map((movie, index) => (
                  <Movie
                    key={`${index}-${movie.Title}`}
                    movie={movie}
                    genres={genres}
                    onDetails={onDetails}
                  />
                ))
              )}
            </div>
          )}
        />
        <Route
          path={"/Movies-Search-/" + selectedPath}
          render={() => (
            <MovieDetails movie={selectedDetails} genres={selectedGenres} />
          )}
        />
        <Redirect from="/" to="/Movies-Search-/" />
      </Switch>

      {/* <Search search={search} />  */}
    </div>
  );
};

export default App;
