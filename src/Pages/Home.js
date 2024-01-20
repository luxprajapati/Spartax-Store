import React, { useEffect, useState } from "react";
import Product from "../Components/Product";
import Spinner from "../Components/Spinner";

const Home = () => {
  const API_URL = "http://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      alert("Something went wrong. Please try again !");
      console.error(error);
      setProducts([]); // reset products
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="">
      {loading ? (
        <div className="flex justify-center items-center h-[100vh]">
          <Spinner></Spinner>
        </div>
      ) : products.length > 0 ? (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mt-12 mx-auto space-y-10 space-x-5">
          {products.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          {" "}
          No products found{" "}
        </div>
      )}
    </div>
  );
};

export default Home;
