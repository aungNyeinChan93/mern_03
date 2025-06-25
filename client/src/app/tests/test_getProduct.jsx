import React, { useEffect, useState } from "react";
import { VITE_PRODUCTS } from "../config/env";

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
      <ul>
        {products &&
          products.length > 0 &&
          products.map((products, index) => {
            return <li key={index}>{products.title}</li>;
          })}
      </ul>
    </React.Fragment>
  );
};

export default ComponentName;
