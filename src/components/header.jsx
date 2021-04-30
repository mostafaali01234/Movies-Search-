import React from "react";
import Search from "./search";

const Header = ({ text, click, setHome }) => {
  return (
    <div className="App-header">
      <a
        href="/"
        onClick={() => {
          setHome(click + 1);
        }}
      >
        {text}
      </a>
      <Search />
    </div>
  );
};

export default Header;
