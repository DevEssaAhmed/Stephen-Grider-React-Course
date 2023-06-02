import React from "react";
import "./styles/SearchBar.css";
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const onSearchChange = (event) => {
    event.preventDefault();
    const searchTerm = event.target.value.toLocaleLowerCase();
    setTerm(searchTerm);
  };
  return (
    <div className='search-container'>
      <form onSubmit={handleFormSubmit}>
        <input
          className='search-box'
          type='search'
          placeholder='Search'
          onChange={onSearchChange}
        />
        <button className='search-button'>
          <i className='fa fa-search'></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
