import { useContext } from "react";
import { ProductsContext } from "../../context";
import { useFetchProducts } from "../../hooks";
import Loading from "../common/Loading";
import Pagination from "../common/Pagination";
import Product from "./Product";
import ProductHeader from "./ProductHeader";

export default function Products() {
  const {
    data: { products, total },
    isLoading,
  } = useFetchProducts();
  const { limit } = useContext(ProductsContext);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="space-y-2">
      <h2 className="text-3xl font-bold text-gray-600">Shop</h2>
      {products?.length > 0 ? (
        <>
          <ProductHeader total={total} />
          <div className="grid grid-cols-3 gap-6 pt-2">
            {products?.map((product) => (
              <Product key={product?.id} product={product} />
            ))}
          </div>
          {total > limit && <Pagination total={total} />}
        </>
      ) : (
        <p className="text-xl font-medium text-gray-500">
          No product available!
        </p>
      )}
    </div>
  );
}
