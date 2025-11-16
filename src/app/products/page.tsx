import ProductsMain from "@/components/ui/web-pages/products/ProductsMain";
import React, { Suspense } from "react";

const ProductsPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsMain />
      </Suspense>
    </div>
  );
};

export default ProductsPage;
