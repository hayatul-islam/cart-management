import { useContext } from "react";
import { MdOutlineClose } from "react-icons/md";
import { ProductsContext } from "../../context";

export default function TableRaw({ product }) {
  const { id, title, thumbnail, price, quantity } = product;
  const { handleRemoveCart, handleQuantity } = useContext(ProductsContext);
  const subtotal = parseInt(quantity) * parseInt(price);

  const handleChange = (e) => {
    const value = e.target.value;
    handleQuantity(id, value);
  };

  return (
    <tr className="border">
      <td className="border px-2 ">
        <MdOutlineClose
          onClick={() => handleRemoveCart(id)}
          className="mt-1 text-red-600 cursor-pointer"
        />
      </td>
      <td className="border p-2">
        <img className="w-10 h-10" src={thumbnail} alt="" />
      </td>
      <td className="border px-2 text-blue-600 font-medium">{title}</td>
      <td className="border px-2">${price}</td>
      <td className="border px-2">
        <input
          onChange={handleChange}
          className="w-16"
          defaultValue={quantity}
          type="number"
        />
      </td>
      <td className="border px-2">${subtotal ? subtotal : "0"}</td>
    </tr>
  );
}
