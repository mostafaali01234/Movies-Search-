import React, { useState, useContext } from "react";
import { SearchContext } from "./App2";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  // const searchFunction = useContext(SearchContext);
  const { searchFun, searchLoading, setSearchLoading } = useContext(
    SearchContext
  );

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e) => {
    // e.preventDefault();
    searchFun(searchValue);
    setSearchLoading(searchLoading + 1);
    resetInputField();
  };

  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <Link to={"/Movies-Search-/"} onClick={callSearchFunction}>
        Search
      </Link>
    </form>
  );
};

export default Search;
