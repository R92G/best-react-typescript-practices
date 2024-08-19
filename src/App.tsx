import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductsPage from "./pages/ProductsPage";
import { Navbar } from "./components/layout/Navbar";
import { SearchModal } from "./components/modals/SearchModal";
import { Toaster } from "react-hot-toast";
import { FavoritesModal } from "./components/modals/FavoritesModal";
import { CartModal } from "./components/modals/CartModal";
import "../src/styles/globals.scss";
import ScrollToTop from "./components/features/ScrollToTop";

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
      <Toaster />
      <SearchModal />
      <FavoritesModal />
      <CartModal />
      <ScrollToTop />
    </Router>
  );
};

export default App;
