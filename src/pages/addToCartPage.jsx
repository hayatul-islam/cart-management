import AddToCart from "../components/addToCart/AddToCart";
import MainLayout from "./layout/mainLayout";

export default function AddToCartPage() {
  return (
    <MainLayout>
      <div className="my-12 p-6 max-w-[500px] mx-auto shadow">
        <AddToCart page="cart" />
      </div>
    </MainLayout>
  );
}
