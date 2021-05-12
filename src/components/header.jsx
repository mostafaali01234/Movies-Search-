import React, { useState } from "react";
import Search from "./search";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = ({ text }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="App-header">
      <a href="/Movies-Search-/">{text}</a>

      <div className="menu" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>

      <Search click={click} />
    </div>
  );
};

export default Header;
