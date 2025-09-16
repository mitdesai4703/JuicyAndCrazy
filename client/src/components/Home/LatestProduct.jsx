import React from "react";
import { useAppContext } from "../../context/AppContext";
import ProductCard from "../../components/ProductCard";

const LatestProduct = () => {
  const { products } = useAppContext();

 
   const latestProducts = products.filter((product) => product.inStock).slice(0, 5);

  return (
    <section className="px-6 sm:px-16 py-16 bg-gradient-to-br from-[#FFFCE8] via-[#FFF9DC] to-[#FFF4CC] text-[#003B2F]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-[#D4AF37] drop-shadow-md mb-14">
          ✨ Discover Our Latest Icepop ✨
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {latestProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProduct;
