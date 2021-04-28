import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  const renderedList = products.map((product) => {
    console.log(product);
    return <ProductItem key={product.itemId} product={product} />;
  });

  return <div>{renderedList}</div>;
};

export default ProductList;
