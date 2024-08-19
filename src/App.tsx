import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { SearchModal } from "./components/modals/SearchModal";
import { Toaster } from "react-hot-toast";
import { FavoritesModal } from "./components/modals/FavoritesModal";
import { CartModal } from "./components/modals/CartModal";
import ScrollToTop from "./components/features/ScrollToTop";
import { SkeletonGrid } from "./components/skeleton/SkeletonGrid";
import { SkeletonDetail } from "./components/skeleton/SkeletonDetail";

import "../src/styles/globals.scss";

// Lazy load pages
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />

      <Routes>
        {/* CategoryPage Routes */}
        <Route
          path="/"
          element={
            <Suspense fallback={<SkeletonGrid />}>
              <CategoryPage />
            </Suspense>
          }
        />
        <Route
          path="/categories"
          element={
            <Suspense fallback={<SkeletonGrid />}>
              <CategoryPage />
            </Suspense>
          }
        />

        {/* ProductsPage Route */}
        <Route
          path="/categories/:categorySlug"
          element={
            <Suspense fallback={<SkeletonGrid />}>
              <ProductsPage />
            </Suspense>
          }
        />

        {/* ProductDetailPage Route */}
        <Route
          path="/products/:productSlug"
          element={
            <Suspense fallback={<SkeletonDetail />}>
              <ProductDetailPage />
            </Suspense>
          }
        />
      </Routes>

      <Toaster />
      <SearchModal />
      <FavoritesModal />
      <CartModal />
    </Router>
  );
};

export default App;
