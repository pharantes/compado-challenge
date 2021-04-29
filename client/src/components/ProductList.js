import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import FilterBar from "./FilterBar";

const ProductList = ({ products }) => {
  const [priceRange, setPriceRange] = useState(null);

  const renderedList = products.map((product) => {
    return <ProductItem key={product.itemId} product={product} />;
  });

  useEffect(() => {}, [priceRange]);

  return (
    <div>
      <FilterBar
        onFilter={(min, max) => {
          setPriceRange([min, max]);
        }}
      />
      <div>
        {priceRange != null
          ? products
              .filter(
                (filteredProduct) =>
                  filteredProduct.sellingStatus[0].currentPrice[0].__value__ >=
                    parseFloat(priceRange[0]) &&
                  filteredProduct.sellingStatus[0].currentPrice[0].__value__ <=
                    parseFloat(priceRange[1])
              )
              .map((product) => {
                return <ProductItem key={product.itemId} product={product} />;
              })
          : renderedList}
      </div>
    </div>
  );
};

export default ProductList;
