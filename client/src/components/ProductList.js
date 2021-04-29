import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import FilterBar from "./FilterBar";

const ProductList = ({ products }) => {
  const [priceRange, setPriceRange] = useState(null);
  const [filteredList, setFilteredList] = useState(null);

  const renderedList = products.map((product) => {
    return <ProductItem key={product.itemId} product={product} />;
  });

  useEffect(() => {
    setFilteredList(
      products
        .filter(
          (filteredProduct) =>
            filteredProduct.sellingStatus[0].currentPrice[0].__value__ >=
              priceRange[0] &&
            filteredProduct.sellingStatus[0].currentPrice[0].__value__ <=
              priceRange[1]
        )
        .map((product) => {
          return <ProductItem key={product.itemId} product={product} />;
        })
    );
    console.log(priceRange);
    console.log(filteredList);
  }, [priceRange]);

  return (
    <div>
      <FilterBar
        onFilter={(min, max) => {
          setPriceRange([min, max]);
        }}
      />
      <div>{renderedList}</div>
    </div>
  );
};

export default ProductList;
