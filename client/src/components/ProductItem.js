import React from "react";

const ProductItem = ({ product }) => {
  return (
    <a href={product.viewItemURL}>
      <div className="card my-2">
        <div className="card-body">
          <div className="title">{product.title}</div>
          <div className="condition">
            <span>Condintion: </span>
            {(product.condition && product.condition[0].conditionDisplayName) ||
              "N. D."}
          </div>
          <div className="location mb-2">
            <span>Location: </span>
            {product.location}
          </div>
          <div className="price">
            <span>Price: </span>
            {product.sellingStatus[0].currentPrice[0].__value__} USD
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProductItem;
