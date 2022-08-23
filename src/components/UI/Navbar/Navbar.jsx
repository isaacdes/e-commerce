import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiStoreAlt } from "react-icons/bi";
import Button from "../Button/Button";
import "./Navbar.scss";
import { IconContext } from "react-icons/lib";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#ffff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link className="navbar-logo" to="/" onClick={closeMobileMenu}>
              <BiStoreAlt className="navbar-icon" />
              fakeStore
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link className="nav-links" to="/" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-links" to="/products" onClick={closeMobileMenu}>
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-links" to="/aboutUs" onClick={closeMobileMenu}>
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-links" to="/contacts" onClick={closeMobileMenu}>
                  Contact
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to="/signUp" className="btn-link" onClick={closeMobileMenu}>
                    <Button buttonStyle="btn--outline">Sign Up</Button>
                  </Link>
                ) : (
                  <Link to="/signUp" className="btn-link"onClick={closeMobileMenu} >
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      Sign Up
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
