import AddToCart from "../../components/addToCart/AddToCart";

export default function ProductLayout({ children }) {
  return (
    <div className="container flex justify-between gap-6 py-6">
      {children}
      <AddToCart />
    </div>
  );
}
