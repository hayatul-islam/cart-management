import AddToCart from "../components/addToCart/AddToCart";
import ProductDetails from "../components/products/ProductDetails";

export default function DetailsPage() {
  return (
    <div className="container flex justify-between gap-6 py-6">
      <ProductDetails />
      <AddToCart />
    </div>
  );
}
