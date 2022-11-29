import React from "react";
import MainRoutes from "./MainRoutes";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductContextProvider from "./contexts/ProductContext";
import "./styles/app.css";
function App() {
  return (
    <>
      <ProductContextProvider>
        <BrowserRouter>
          <Navbar />
          <MainRoutes />
        </BrowserRouter>
      </ProductContextProvider>
    </>
  );
}

export default App;
