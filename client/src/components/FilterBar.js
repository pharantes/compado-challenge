import React, { useState } from "react";

const FilterBar = ({ onFilter }) => {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const onFilterChange = (event) => {
    event.preventDefault();
    onFilter(min, max);
  };

  return (
    <div className="row m-0">
      <div className="input-group">
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
          pattern="[0-9]*"
          onChange={(event) =>
            event.target.validity.valid
              ? setMin(event.target.value)
              : setMax("")
          }
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
          pattern="[0-9]*"
          onChange={(event) =>
            event.target.validity.valid
              ? setMax(event.target.value)
              : setMax("")
          }
        />
        <button onClick={onFilterChange} className="ml-2 custom-button">
          Filter
        </button>
      </div>
      <span className="warning mb-3 ml-auto">* only numbers allowed</span>
    </div>
  );
};

export default FilterBar;
