import { useEffect, useState } from "react";
import api from "../api/api";

const useEbay = (defaultSearchTerm) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = (term) => {
    api
      .getProducts(term)
      .then((data) => setProducts(data.data))
      .catch((err) => setProducts({ message: err.toString() }));
  };

  return [products, search];
};
export default useEbay;
