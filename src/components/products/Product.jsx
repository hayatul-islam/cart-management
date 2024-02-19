import { useContext } from "react";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../context";

export default function Product({ product }) {
  const { handleAddToCart } = useContext(ProductsContext);
  const { title, price, thumbnail, id } = product;
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow text-center">
      <div className="space-y-2 py-2">
        <Link to={`/products/${id}`}>
          <img className="h-[180px] mx-auto" src={thumbnail} alt={title} />
        </Link>

        <Link
          to={`/products/${id}`}
          className="text-xl font-semibold tracking-tight text-gray-900 block hover:text-blue-500"
        >
          {title}
        </Link>
        <p className="text-lg font-bold text-red-400 ">${price}</p>
      </div>

      <button
        onClick={() => handleAddToCart(product)}
        className="w-full border border-b-0 py-2 flex justify-center items-center gap-2 text-gray-600"
      >
        <MdShoppingCart /> <span>Add To Cart</span>
      </button>
    </div>
  );
}
