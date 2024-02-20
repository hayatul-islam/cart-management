import { useState } from "react";
import { ProductsContext } from "../context";
import getFindProduct from "../utils/getFindProduct";

const ProductProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [skip, setSkip] = useState(0);
  const limit = 12;

  // cart functionality
  const handleAddToCart = (product, quantity) => {
    const findProduct = getFindProduct(cartData, product?.id);

    if (findProduct) {
      if (!quantity || quantity === findProduct?.quantity) {
        return alert("Product already add to cart.");
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
      alert("Quantity must be at least 1.");
    }
  };

  // search functionality
  const handleSearchQuery = (value) => {
    setSearchQuery(value);
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

  return (
    <ProductsContext.Provider
      value={{
        cartData,
        handleAddToCart,
        handleRemoveCart,
        handleQuantity,
        searchQuery,
        handleSearchQuery,
        skip,
        limit,
        currentPage,
        handleSkip,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductProvider;
