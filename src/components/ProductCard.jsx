import { ListItem } from "@mui/material";
import React from "react";

const ProductCard = ({ item }) => {
  return (
    <>
      <div>
        <div>{item.productName}</div>
        <div>{item.productPrice}</div>
        <div>{item.productDesc}</div>
        <img style={{ width: "100px" }} src={item.productImage} alt="" />
      </div>
    </>
  );
};

export default ProductCard;
