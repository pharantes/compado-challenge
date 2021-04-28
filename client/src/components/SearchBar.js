import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("mac");

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };
  return (
    <div className="">
      <form onSubmit={onSubmit} className="input-group mb-3">
        <label
          htmlFor="floatingInput"
          className="input-group-text mr-2"
          id="basic-addon1"
        >
          Product Search:
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="search something..."
          aria-label="SearchInput"
          aria-describedby="basic-addon1"
          value={term}
          onChange={(event) => setTerm(event.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
