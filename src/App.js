import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component" 
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="/shop" element={<ShopPage />} />

        <Route path="/men" element={<div><h1>Hello This is MEN</h1></div>} />
        <Route path="/women" element={<div><h1>Hello This is WOMEN</h1></div>} />
        <Route path="/hats" element={<div><h1>Hello This is HATS</h1></div>} />
        <Route path="/jackets" element={<div><h1>Hello This is JACKETS</h1></div>} />
        <Route path="/sneakers" element={<div><h1>Hello This is SNEAKERS</h1></div>} />
      </Routes>
    </div>
  );
}

export default App;
