import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="">
      {/* <img
        alt={product.snippet.title}
        className=""
        src={product.snippet.thumbnails.medium.url}
      /> */}
      <div className="">
        <div className="">{product.title}</div>
      </div>
    </div>
  );
};

export default ProductItem;
