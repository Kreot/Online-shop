import React, { useContext, useEffect, useState } from "react";
import { productsContext } from "../contexts/ProductContext";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { data, getProduct } = useContext(productsContext);

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      {data ? (
        data.map((item) => {
          return <ProductCard item={item} key={item.id} />;
        })
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};

export default ProductList;
