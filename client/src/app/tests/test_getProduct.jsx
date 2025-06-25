import React, { useEffect, useState } from "react";
import { VITE_PRODUCTS } from "../config/env";
import ProductCard from "../components/others/ProductCard";

const ComponentName = () => {
  const [products, setProducts] = useState([{ title: "koko" }]);
  const fetchProducts = async () => {
    const res = await fetch(`${VITE_PRODUCTS}`);
    const data = await res.json();
    console.log(data);
    setProducts((pre) => (Array.isArray(data) ? [...pre, ...data] : [...pre]));
  };

  useEffect(() => {
    const call = async () => {
      await fetchProducts();
    };
    call();
  }, []);
  return (
    <React.Fragment>
      <div className="grid lg:grid-cols-4 gap-2 mx-10">
        {products &&
          products.length > 0 &&
          products.map((products, index) => {
            return <ProductCard key={index} {...products} />;
          })}
      </div>
    </React.Fragment>
  );
};

export default ComponentName;
