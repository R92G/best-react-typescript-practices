import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductsPage from "./pages/ProductsPage";
import "../src/styles/globals.scss";
import { Navbar } from "./components/layout/Navbar";
import SearchModal from "./components/modals/SearchModal";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CategoryPage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/categories/:categorySlug" element={<ProductsPage />} />
        <Route path="/products/:productSlug" element={<ProductDetailPage />} />
      </Routes>
      <SearchModal />
    </Router>
  );
};

export default App;
