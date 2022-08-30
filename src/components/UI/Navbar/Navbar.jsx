import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiStoreAlt } from "react-icons/bi";
import Button from "../Button/Button";
import "./Navbar.scss";
import { IconContext } from "react-icons/lib";

import { useSelector } from "react-redux";

import Cart from "../../Cart/Cart";

/**
 * this component contains the navbar content,
 *  the button for login/logout is conditionally chnaged 
 * based on the state of isUSerLoggedIn from the userStore redux state
 * It uses the styles from Navbar.scss
 * @returns It return a Navbar component
 */
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [btnText, setBtnText] = useState("Login");

  const userIsLoggedIn = useSelector((state) => state.userStore.userIsLogged);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  /**
   * This function toggles when the innerWidth of the page becomes less than 960
   * 
   */
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

  /**
   * this useeffect is to get the updated state from the redux
   */
  useEffect(() => {
    if (userIsLoggedIn) {
      setBtnText("Logout");
    } else {
      setBtnText("Login");
    }
  }, [userIsLoggedIn, btnText]);

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
                <Link
                  className="nav-links"
                  to="/products"
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li>

              <li className="nav-btn">
                {button ? (
                  // Logout with button
                  <Link
                    to={`/${btnText}`}
                    className="btn-link"
                    onClick={closeMobileMenu}
                  >
                    <Button buttonStyle="btn--outline">{btnText}</Button>
                  </Link>
                ) : (
                  //logout without button
                  <Link
                    to={`/${btnText}`}
                    className="btn-link"
                    onClick={closeMobileMenu}
                  >
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      {btnText}
                    </Button>
                  </Link>
                )}
              </li>
              <div onClick={closeMobileMenu} className="cart-btn">
                <Cart />
              </div>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
