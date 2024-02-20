import { useEffect, useState } from "react";
import api from "../api/api";

const useFetchAllProducts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await api.get(`/products?skip=0&limit=100`);
      if (response && response?.data) {
        setData(response.data?.products);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetchAllProducts;
