import { useContext, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { ProductsContext } from "../../context";
import getFindProduct from "../../utils/getFindProduct";

export default function Checkout() {
  const location = useLocation();
  const queryString = location.search;
  const id = new URLSearchParams(queryString).get("id");
  const { cartData, handleRemoveCart, handleQuantity } =
    useContext(ProductsContext);

  const product = getFindProduct(cartData, id);
  const subtotal = Number(product?.quantity) * Number(product?.price);
  const [quantity, setQuantity] = useState(product?.quantity);

  return (
    <div className="space-y-12">
      <div className="space-y-3">
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="border p-2"> </th>
              <th className="border px-2"> </th>
              <th className="border p-2">Product</th>
              <th className="border px-2">Price</th>
              <th className="border px-2">Quantity</th>
              <th className="border px-2">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border">
              <td className="border px-2 ">
                <MdOutlineClose
                  onClick={() => handleRemoveCart(id)}
                  className="mt-1 text-red-600 cursor-pointer"
                />
              </td>
              <td className="border p-2">
                <img className="w-10 h-10" src={product?.thumbnail} alt="" />
              </td>
              <td className="border px-2 text-blue-600 font-medium">
                {product?.title}
              </td>
              <td className="border px-2">${product?.price}</td>
              <td className="border px-2">
                <input
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-16"
                  defaultValue={product?.quantity}
                  type="number"
                />
              </td>
              <td className="border px-2">${subtotal ? subtotal : "0"}</td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-end">
          <button
            onClick={() => handleQuantity(product?.id, quantity)}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            Update cart
          </button>
        </div>
      </div>

      <div className="max-w-[400px] w-full ml-auto space-y-4">
        <h2 className="text-2xl font-bold text-gray-600">Cart totals</h2>
        <div>
          <h3 className="flex gap-6 border px-4 py-2">
            <span className="w-[100px] font-medium">Subtotal</span>
            <span>${subtotal ? subtotal : "0"}</span>
          </h3>
          <div className="flex gap-6 border px-4 py-2">
            <p className="w-[100px] font-medium">Subtotal</p>
            <div>
              <p>Free shipping</p>
              <p>Shipping will be updated during checkout.</p>
            </div>
          </div>
          <h3 className="flex gap-6 border px-4 py-2">
            <span className="w-[100px] font-medium">Total</span>
            <span>${subtotal ? subtotal : "0"}</span>
          </h3>
        </div>
        <button className="bg-primary px-4 py-3 text-white text-center w-full">
          Place order
        </button>
      </div>
    </div>
  );
}
