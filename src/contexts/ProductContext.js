import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
export const productsContext = React.createContext();

const API = "http://localhost:8000/products";

const ContextProvider = ({ children }) => {
  let [data, setData] = useState(null);
  function addProduct(obj) {
    axios.post(API, obj);
  }
  async function getProduct() {
    let res = await axios(API);
    setData(res.data);
  }
  return (
    <productsContext.Provider value={{ addProduct, getProduct, data }}>
      {children}
    </productsContext.Provider>
  );
};

export default ContextProvider;
