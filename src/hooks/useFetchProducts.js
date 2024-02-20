import { useContext, useEffect, useState } from "react";
import api from "../api/api";
import { ProductsContext } from "../context";

const useFetchProducts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { searchQuery, skip, limit } = useContext(ProductsContext);

  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await api.get(
        `${url}?q=${searchQuery}&skip=${skip}&limit=${limit}`
      );
      if (response && response?.data) {
        setData(response?.data);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const url = searchQuery !== "" ? `/product/search` : "/products";
    fetchData(url);
  }, [searchQuery, skip, limit]);

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetchProducts;
