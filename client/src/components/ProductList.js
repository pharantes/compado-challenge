import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  const renderedList = products.map((product) => {
    return <ProductItem key={product.itemId} product={product} />;
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default ProductList;
