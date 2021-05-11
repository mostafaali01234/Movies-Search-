import React, { useState, createContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "../css/App.css";
import Home from "./home";
import Header from "./header";
import MovieDetails from "./movieDetails";

export const SearchContext = createContext();

const App2 = () => {
  const [selectedDetails, setSelectedDetails] = useState();
  const [selectedPath, setSelectedPath] = useState();
  const [selectedGenres, setSelectedGenres] = useState();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);

  const searchFun = (searchValue) => {
    setLoading(true);
    setErrorMessage(null);

    setTimeout(() => {
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
    }, 50);
  };

  return (
    <BrowserRouter>
      <React.Fragment>
        <div className="bg-image"></div>
        <SearchContext.Provider
          value={{ searchFun, searchLoading, setSearchLoading }}
        >
          <Header text="Movies Search"></Header>
        </SearchContext.Provider>

        <Switch>
          <Route
            path="/Movies-Search-/"
            exact
            render={() => (
              <Home
                setSelectedDetails={setSelectedDetails}
                setSelectedPath={setSelectedPath}
                setSelectedGenres={setSelectedGenres}
                setMovies={setMovies}
                movies={movies}
                setLoading={setLoading}
                loading={loading}
                errorMessage={errorMessage}
                searchLoading={searchLoading}
              />
            )}
          />

          <Route
            path={`/Movies-Search-/${selectedPath}/`}
            render={() => (
              <MovieDetails movie={selectedDetails} genres={selectedGenres} />
            )}
          />

          <Redirect from="/" to="/Movies-Search-/" />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App2;
