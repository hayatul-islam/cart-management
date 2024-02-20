import { useState } from "react";
import { toast } from "react-toastify";
import { ProductsContext } from "../context";
import { useFetchAllProducts } from "../hooks";
import getFilterProducts from "../utils/getFilterProducts";
import getFindProduct from "../utils/getFindProduct";

const ProductProvider = ({ children }) => {
  const allProducts = useFetchAllProducts();
  const [cartData, setCartData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [skip, setSkip] = useState(0);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [showData, setShowData] = useState("all");
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 2000,
    rating: 1,
    category: "",
    brand: "",
  });
  const limit = 30;

  const filterData = getFilterProducts(allProducts?.data, filters);

  // cart functionality
  const handleAddToCart = (product, quantity) => {
    const findProduct = getFindProduct(cartData, product?.id);

    if (findProduct) {
      if (!quantity || quantity === findProduct?.quantity) {
        return toast.warn("Product already add to cart.");
      }
      return handleQuantity(product?.id, quantity);
    }
    product.quantity = 1;
    setCartData([...cartData, product]);
  };

  const handleRemoveCart = (id) => {
    const data = cartData?.filter((p) => p.id !== Number(id));
    setCartData(data);
  };

  const handleQuantity = (id, quantity) => {
    const updateData = cartData?.map((item) => {
      if (item?.id === id) {
        return {
          ...item,
          quantity,
        };
      } else {
        return item;
      }
    });

    if (quantity > 0) {
      setCartData(updateData);
    } else {
      toast.warn("Quantity must be at least 1.");
    }
  };

  const handleOrderPlace = () => {
    setCartData([]);
    toast.success("Your order has been successful.");
  };

  // search functionality
  const handleSearchQuery = (value) => {
    setSearchQuery(value);
    setShowData("all");
  };

  // pagination functionality
  const currentPage = skip / limit;
  const handleSkip = (item) => {
    if (item === "prev") {
      setSkip(skip - limit);
    } else if (item === "next") {
      setSkip(skip + limit);
    } else {
      setSkip(limit * item);
    }
  };

  // filter functionality
  const openFilter = () => {
    setIsOpenFilter(true);
  };
  const closeFilter = () => {
    setIsOpenFilter(false);
  };
  const handleFilter = (item, value) => {
    setFilters({
      ...filters,
      [item]: value,
    });
    setShowData("filter");
  };

  return (
    <ProductsContext.Provider
      value={{
        cartData,
        handleAddToCart,
        handleRemoveCart,
        handleQuantity,
        handleOrderPlace,
        searchQuery,
        handleSearchQuery,
        skip,
        limit,
        currentPage,
        handleSkip,
        filters,
        handleFilter,
        isOpenFilter,
        openFilter,
        closeFilter,
        filterData,
        showData,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductProvider;
