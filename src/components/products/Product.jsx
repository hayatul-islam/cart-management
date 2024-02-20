import { useContext } from "react";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../context";

export default function Product({ product }) {
  const { handleAddToCart } = useContext(ProductsContext);
  const { title, price, thumbnail, id } = product;
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow text-center grid">
      <div className="space-y-2 py-2">
        <Link to={`/products/${id}`}>
          <img className="h-[180px] mx-auto" src={thumbnail} alt={title} />
        </Link>

        <Link
          to={`/products/${id}`}
          className="text-lg md:text-xl font-semibold tracking-tight text-gray-900 block hover:text-blue-500 px-1"
        >
          {title}
        </Link>
        <p className="text-md md:text-lg font-bold text-red-400 ">${price}</p>
      </div>

      <div className="grid items-end ">
        <button
          onClick={() => handleAddToCart(product)}
          className="w-full border  py-2 flex justify-center items-center gap-2 text-gray-600 "
        >
          <MdShoppingCart /> <span>Add To Cart</span>
        </button>
      </div>
    </div>
  );
}
