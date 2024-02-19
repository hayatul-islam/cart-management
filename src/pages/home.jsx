import AddToCart from "../components/addToCart/AddToCart";
import Products from "../components/products/Products";

export default function Home() {
  return (
    <div className="container flex justify-between gap-6 py-6">
      <Products />
      <AddToCart />
    </div>
  );
}
