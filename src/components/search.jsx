import React, { useState, useContext } from "react";
import { SearchContext } from "./App2";
import { Link } from "react-router-dom";

const Search = ({ click, setClick }) => {
  const [searchValue, setSearchValue] = useState("");
  // const searchFunction = useContext(SearchContext);
  const { searchFun, searchLoading, setSearchLoading } =
    useContext(SearchContext);

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
    setClick(!click);
    resetInputField();
  };

  return (
    <form className={click ? "search active" : "search"}>
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
