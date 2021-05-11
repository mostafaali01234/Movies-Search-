import React from "react";

import Search from "./search";

const Header = ({ text, click, setHome }) => {
  return (
    <div className="App-header">
      <a href="/Movies-Search-/">{text}</a>

      <Search />
    </div>
  );
};

export default Header;
