import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductsPage from "./pages/ProductsPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CategoryPage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/categories/:categorySlug" element={<ProductsPage />} />
        <Route path="/products/:productSlug" element={<ProductDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
