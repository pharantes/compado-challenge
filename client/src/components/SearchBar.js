import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="row m-0">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control mr-2"
          placeholder="search something..."
          aria-label="SearchInput"
          aria-describedby="basic-addon1"
          value={term}
          onChange={(event) => setTerm(event.target.value)}
        />
        <button
          onClick={onSubmit}
          className="custom-button"
          id="basic-addon1"
        >
          Search Product
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
