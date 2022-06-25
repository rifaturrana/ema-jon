import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import Review from "./components/Review/Review";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/Nofound/NotFound";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Shipment from "./components/Shipment/Shipment";
import Login from "./components/Login/Login";

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/review" element={<Review />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/" element={<Shop />} />
          <Route path="/shipment" element={<Shipment />} />

          <Route path="/login" element={<Login />} />

          <Route path="/product/:productKey" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
