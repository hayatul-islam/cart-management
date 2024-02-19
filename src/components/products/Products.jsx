import { useFetchProducts } from "../../hooks";
import Product from "./Product";

export default function Products() {
  const { data: products } = useFetchProducts();
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-gray-600">Shop</h2>
        <div className="flex justify-between items-center">
          <p className="text-gray-600">Showing 1-9 of 30 results</p>
          <select name="" id="" className="w-[240px] border py-1 rounded">
            <option value="">Select </option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {products?.map((product) => (
          <Product key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
}
