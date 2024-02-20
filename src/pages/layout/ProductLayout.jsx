import { useContext } from "react";
import AddToCart from "../../components/addToCart/AddToCart";
import FilterProducts from "../../components/common/FilterProducts";
import { ProductsContext } from "../../context";

export default function ProductLayout({ children }) {
  const { isOpenFilter } = useContext(ProductsContext);
  return (
    <div className="container  flex justify-between gap-6 py-6 relative">
      <div className="w-full">{children}</div>
      <div className="w-[350px]">
        <AddToCart />
      </div>
      {isOpenFilter && (
        <div className="absolute top-0 right-0 w-[320px]">
          <FilterProducts />
        </div>
      )}
    </div>
  );
}
