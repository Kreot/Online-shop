import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productsContext } from "../contexts/ProductContext";

const AddProductForm = () => {
  const { addProduct } = useContext(productsContext);
  const Navigate = useNavigate();

  let [productName, setProductName] = useState("");
  let [productPrice, setProductPrice] = useState("");
  let [productDesc, setProductDesc] = useState("");
  let [productImage, setProductImage] = useState("");

  function sendNewProduct() {
    if (
      !productName.trim() ||
      !productDesc.trim() ||
      !productPrice.trim() ||
      !productImage
    ) {
      alert("Some inputs ore empty");
      return;
    }
    let obj = {
      productName,
      productDesc,
      productPrice,
      productImage,
    };
    addProduct(obj);
    Navigate("/");
  }

  return (
    <>
      <input
        placeholder="Product Name"
        onChange={(e) => setProductName(e.target.value)}
        type="text"
      />
      <input
        placeholder="Product Price"
        onChange={(e) => setProductPrice(e.target.value)}
        type="text"
      />
      <input
        placeholder="Product Description"
        onChange={(e) => setProductDesc(e.target.value)}
        type="text"
      />
      <input
        placeholder="Product Image (url)"
        onChange={(e) => setProductImage(e.target.value)}
        type="text"
      />
      <button onClick={() => sendNewProduct()}>Save Product</button>
    </>
  );
};

export default AddProductForm;
