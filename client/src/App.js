import React from "react";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import useEbay from "./hooks/useEbay";
import "./styles.scss";

const App = () => {
  const [products, search] = useEbay("mac");

  return (
    <div className="container">
      <h3>Compado challenge - consume eBay Finding API</h3>
      <h4>Frontend - React</h4>
      <h4>Backend - Nodejs/Express</h4>
      <hr
        style={{
          backgroundColor: "rgb(114, 191, 0)",
        }}
      />
      <div className="row">
        <div className="col">
          <SearchBar onFormSubmit={search} />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
};

export default App;
