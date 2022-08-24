import { Route, Routes } from "react-router-dom";

import "./App.css";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import SignUp from "./components/pages/Authentication/SignUp";
import Contacts from "./components/pages/Contacts/Contacts";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Products from "./components/pages/Products/Products";
// import SelectedProduct from "./components/pages/Products/SelectedProduct";
// import Modal from "./components/UI/Modal/Modal";
import Navbar from "./components/UI/Navbar/Navbar";

function App() {
  
  return (
    <>
      <Navbar />
      {/* <Modal>fsadlkfl</Modal> */}
      
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
