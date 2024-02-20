import { useContext } from "react";
import { ProductsContext } from "../../context";

export default function ProductHeader({ total }) {
  const { currentPage, limit } = useContext(ProductsContext);
  const totalPage = Math.floor(total / limit);
  return (
    <div className="w-full flex justify-between items-center">
      <p className="text-gray-600">
        Showing {currentPage}-{totalPage} of {total} results
      </p>
      <select name="" id="" className="w-[240px] border py-1 rounded">
        <option value="">Select </option>
      </select>
    </div>
  );
}
