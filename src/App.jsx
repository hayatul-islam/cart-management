import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AddToCartPage from "./pages/addToCartPage";
import CheckoutPage from "./pages/checkoutPage";
import DetailsPage from "./pages/detailsPage";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/add-to-cart" element={<AddToCartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
