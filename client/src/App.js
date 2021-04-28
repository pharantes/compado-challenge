import React from "react";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import useEbay from "./hooks/useEbay";

const App = () => {
  const [products, search] = useEbay("mac");
 
  return (
    <div className="">
      <SearchBar onFormSubmit={search} />
      <div className="">
        <div className="">
          <div className="">
            <ProductList products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
