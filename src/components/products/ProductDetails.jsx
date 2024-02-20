import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context";
import { useFetchProduct } from "../../hooks";
import getFindProduct from "../../utils/getFindProduct";
import Loading from "../common/Loading";

export default function ProductDetails() {
  const { id } = useParams();
  const { handleAddToCart, cartData } = useContext(ProductsContext);
  const { data: product, isLoading } = useFetchProduct(id);

  const cartProduct = getFindProduct(cartData, id);
  const [quantity, setQuantity] = useState(cartProduct?.quantity ?? 1);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {product?.id ? (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <img
                src={product?.thumbnail}
                alt=""
                className="w-full h-80 object-cover rounded"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold ">{product?.title}</h1>
              <p className="text-lg font-bold text-red-400 ">
                ${product?.price}
              </p>
              <p className="text-base mb-4">{product?.description}</p>
              <div className="w-[300px]">
                <label for="hs-trailing-button-add-on" className="sr-only">
                  Label
                </label>
                <div className="flex rounded-lg shadow-sm pt-3">
                  <input
                    type="number"
                    onChange={(e) => setQuantity(e.target.value)}
                    defaultValue={quantity}
                    className="py-3 px-2 w-[100px] border-gray-200 border focus:outline-none shadow-sm rounded-s-lg text-sm focus:z-10 "
                  />
                  <button
                    onClick={() => handleAddToCart(product, quantity)}
                    type="button"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-primary text-white"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
              <button className="inline-block px-4 py-2 border-b-0 text-gray-600 border rounded-t-lg">
                Description
              </button>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-medium ">Description</h3>
              <p>{product?.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>No product found!</p>
      )}
    </>
  );
}
