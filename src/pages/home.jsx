import Products from "../components/products/Products";
import ProductLayout from "./layout/ProductLayout";
import MainLayout from "./layout/mainLayout";

export default function Home() {
  return (
    <MainLayout>
      <ProductLayout>
        <Products />
      </ProductLayout>
    </MainLayout>
  );
}
