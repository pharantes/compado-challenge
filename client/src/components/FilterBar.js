import React, { useState } from "react";

const FilterBar = ({ onFilter }) => {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const onFilterChange = (event) => {
    event.preventDefault();
    onFilter(min, max);
  };

  return (
    <div className="row justify-content-center m-0">
      <div className="input-group mb-3">
        <label className="input-group-text mr-2" id="basic-addon2">
          Min
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="$$"
          aria-label="MinPriceInput"
          aria-describedby="basic-addon2"
          value={min}
          onChange={(event) => setMin(event.target.value)}
        />
        <label className="input-group-text mx-2" id="basic-addon3">
          Max
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="$$"
          aria-label="MaxPriceInput"
          aria-describedby="basic-addon3"
          value={max}
          onChange={(event) => setMax(event.target.value)}
        />
      </div>
      <button onClick={onFilterChange} className="ml-2 btn-primary">
        Filter
      </button>
    </div>
  );
};

export default FilterBar;
