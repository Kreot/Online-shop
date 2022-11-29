import React, { useContext } from "react";
import { productsContext } from "../contexts/ProductContext";
import AddProductForm from "../components/AddProductForm";

const AddProductPage = () => {
  // const { test } = useContext(productsContext);
  // test();
  return (
    <>
      <AddProductForm />
    </>
  );
};

export default AddProductPage;
