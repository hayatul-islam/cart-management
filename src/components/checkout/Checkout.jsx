import { useContext } from "react";
import { ProductsContext } from "../../context";
import TableRaw from "./TableRaw";

export default function Checkout() {
  const { cartData } = useContext(ProductsContext);

  const subtotal = cartData?.reduce((total, item) => {
    const itemPrice = item.price * item.quantity;
    return total + itemPrice;
  }, 0);

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
            {cartData?.map((product) => (
              <TableRaw key={product?.id} product={product} />
            ))}
          </tbody>
        </table>
        {/* <div className="flex justify-end">
          <button
            onClick={() => handleQuantity(product?.id, quantity)}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            Update cart
          </button>
        </div> */}
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
