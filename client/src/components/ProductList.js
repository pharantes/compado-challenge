import React, { useState } from "react";
import ProductItem from "./ProductItem";
import FilterBar from "./FilterBar";

const ProductList = ({ products }) => {
  const [filteredList, setFilteredList] = useState([]);

  const onFilter = (min, max, products) => {
    setFilteredList(
      products.filter((product) => {
        return (
          product.sellingStatus[0].currentPrice[0].__value__ >= min &&
          product.sellingStatus[0].currentPrice[0].__value__ <= max
        );
      })
    );
  };
  
  const renderedList = filteredList.length
    ? filteredList.map((product) => {
        return <ProductItem key={product.itemId} product={product} />;
      })
    : products.map((product) => {
        return <ProductItem key={product.itemId} product={product} />;
      });

  return (
    <div>
      <FilterBar onFilter={onFilter} />
      <div>{renderedList}</div>
    </div>
  );
};

export default ProductList;
