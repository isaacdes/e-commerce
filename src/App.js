import { Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./components/Authentication/Login";
import Logout from "./components/Authentication/Logout";
import SignUp from "./components/Authentication/SignUp";

// import SignUp from "./components/pages/Authentication/SignUp";

import Dashboard from "./components/pages/Dashboard/Dashboard";
import Products from "./components/pages/Products/Products";
import SelectedProduct from "./components/pages/Products/SelectedProduct";
// import Footer from "./components/UI/Footer/Footer";
import Navbar from "./components/UI/Navbar/Navbar";
import authGuard from "./HOC/authGuard";

/**
 * APP() contains the routes and the componenets used in the application
 * @returns the entire App
 */
function App() {
  const AuthProducts = authGuard(Products);
  const AuthSelectedProduct = authGuard(SelectedProduct);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/products" element={<AuthProducts />} />
        <Route path="/product/:productId" element={<AuthSelectedProduct />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
