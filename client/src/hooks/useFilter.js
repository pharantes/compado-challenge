import { useEffect, useState } from "react";

const useEbay = ({ min, max, products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    filter(products);
  }, [min, max, products]);

  const filter = (data) => {
    setFilteredProducts(
      data.filter((product) => {
        return (
          product.sellingStatus[0].currentPrice[0].__value__ >= min &&
          product.sellingStatus[0].currentPrice[0].__value__ <= max
        );
      })
    );
  };
  return [filteredProducts, filter];
};
export default useEbay;
