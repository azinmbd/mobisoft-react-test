import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchMovieList } from "../store/action";
import SearchIcon from "./svgCode/SearchIcon";

const SearchBox = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      searchMovieList({
        searchText,
      })
    );
    document.getElementById("mainInput").reset();
  };
  return (
    <form
      onSubmit={(event) => handleSubmit(event)}
      id="mainInput"
      className="col-8 col-lg-12 align-items-center justify-content-between"
    >
      <input
        className="form-control mr-sm-2 "
        value={searchText}
        onChange={(event) => handleChange(event)}
        type="text"
        placeholder="Type Movie name"
        aria-label="Search"
        required
      />

      <button className="btn " type="submit">
        search
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBox;
