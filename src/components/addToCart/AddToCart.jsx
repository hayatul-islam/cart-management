import { useContext } from "react";
import { ProductsContext } from "../../context";
import Cart from "./Cart";

export default function AddToCart() {
  const { cartData } = useContext(ProductsContext);

  return (
    <div className="w-[280px]">
      <h2 className="text-3xl font-bold text-gray-600">Cart</h2>
      {cartData?.length <= 0 ? (
        <p className="text-gray-400 pt-3 font-medium">
          No products in the cart.
        </p>
      ) : (
        <div className="space-y-4">
          {cartData?.map((product) => (
            <Cart key={product?.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
