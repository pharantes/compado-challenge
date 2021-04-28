import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="card my-2">
      <div className="card-body">
        <div className="">{product.title}</div>
        <div className="fw-bold">
          Condintion: {product.condition[0].conditionDisplayName}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
