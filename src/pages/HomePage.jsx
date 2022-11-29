import React, { useContext } from "react";
import { productsContext } from "../contexts/ProductContext";
import ProductList from "../components/ProductList";

const HomePage = () => {
  const {} = useContext(productsContext);
  return (
    <>
      <ProductList />
    </>
  );
};

export default HomePage;
