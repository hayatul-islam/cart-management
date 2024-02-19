import { useEffect, useState } from "react";
import api from "../api/api";

const useFetchProduct = (id) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await api.get(`/products/${id}`);
      if (response && response?.data) {
        setData(response.data);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetchProduct;
