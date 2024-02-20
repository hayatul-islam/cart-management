import ProductDetails from "../components/products/ProductDetails";
import ProductLayout from "./layout/ProductLayout";
import MainLayout from "./layout/mainLayout";

export default function DetailsPage() {
  return (
    <MainLayout>
      <ProductLayout>
        <ProductDetails />
      </ProductLayout>
    </MainLayout>
  );
}
