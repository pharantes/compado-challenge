import React from "react";
import ProductItem from "./ProductItem";
import FilterBar from "./FilterBar";
import useFilter from "../hooks/useFilter";

const ProductList = ({ products }) => {
  
  const filterData = {
    min: "0",
    max: "2000",
    products: products,
  };

  const [filteredProducts, filter] = useFilter(filterData);

  const renderedList = filteredProducts.length
    ? filteredProducts.map((product) => {
        return <ProductItem key={product.itemId} product={product} />;
      })
    : products.map((product) => {
        return <ProductItem key={product.itemId} product={product} />;
      });

  return (
    <div>
      <FilterBar onFilter={filter} />
      <div>{renderedList}</div>
    </div>
  );
};

export default ProductList;
