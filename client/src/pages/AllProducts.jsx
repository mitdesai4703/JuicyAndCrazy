import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";

const AllProducts = () => {
  const { products, searchQuery } = useAppContext();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [products, searchQuery]);

  return (
    <section className="bg-[#FFFCE8] min-h-screen py-16 px-6 sm:px-16">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-[#003B2F] mb-10 text-center">
        Explore Our Juicy Pops
      </h1>

     
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {filteredProducts
          .filter((product) => product.inStock)
          .map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </section>
  );
};

export default AllProducts;
