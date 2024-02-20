import Checkout from "../components/checkout/Checkout";
import MainLayout from "./layout/mainLayout";

export default function CheckoutPage() {
  return (
    <MainLayout>
      <div className="container py-6">
        <Checkout />
      </div>
    </MainLayout>
  );
}
