import React, { useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";

import classes from "./Cart.module.scss";
import { IconContext } from "react-icons/lib";
import Modal from "../UI/Modal/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../UI/Button/Button";
import {
  calculateTotal,
  changeQuantity,
  clearCart,
  removeFromCart,
} from "../../redux/fakeStore/fakeStoreSlice";
import { useEffect } from "react";

/**
 * This function is for the Cart functionality.
 * once clicked it will display the cart in form of a modal format
 * @returns
 */
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.fakeStore.cart);
  const total = useSelector((state) => state.fakeStore.total);
  const [cartIsShown, setCartIsShown] = useState(false);

  const toastOptions = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: false,
    draggable: true,
    theme: "dark",
  };

  //   console.log(cart);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [dispatch, cart]);

  /**
   * function to show the cart modal
   */
  const showCartModal = () => {
    setCartIsShown(true);
  };

  /**
   * function to hide the cart Modal
   */
  const hideCartModal = () => {
    setCartIsShown(false);
  };

  /**
   * this function changes the quantity from the cart and dispacthes a changeQuantity() from the fakeStoreSlice.js to change the cart fields of total and quantity
   * @param {*} id id is of the product from cart
   * @param {*} quantity quantity will be -1 or +1
   */
  const changeQuantityValue = (id, quantity) => {
    dispatch(changeQuantity({ id, quantity }));
  };

  /**
   * This function accepts the id of the product from cart and removes it from the cart by calling the removeFromCart(id) from the
   * fakeStoreSlice.js
   * @param {*} id the id is of the product that needs to removed from the cart
   */
  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  };

  /**
   * ths function places the order and clears the cart state
   * by calling the clearCart() from the fakeStoreSlice.js
   */
  const placeOrder = () => {
    dispatch(clearCart());
    setCartIsShown(false);
    toast.success("Congratulation , Your order is placed", toastOptions);
  };

  return (
    <>
      {cartIsShown ? (
        <Modal onClose={hideCartModal}>
          <div>
            <div className={classes["cart-items"]}>
              <h1>Items in Cart</h1>
              {cart.length > 0 ? (
                cart.map((product) => (
                  <div key={product.id} className={classes.modal}>
                    <div className={classes.title}>
                      <img src={product.image} alt={product.title} />
                      <p>{product.title}</p>
                    </div>

                    <div className={classes.price}>
                      <p>Cost: {product.price}</p>
                      <div className={classes.actions}>
                        {product.quantity === 1 ? (
                          <button onClick={(id) => removeItem(product.id)}>
                            -
                          </button>
                        ) : (
                          <button
                            onClick={() =>
                              changeQuantityValue(
                                product.id,
                                product.quantity - 1
                              )
                            }
                          >
                            -
                          </button>
                        )}

                        <span>{product.quantity}</span>
                        <button
                          onClick={() =>
                            changeQuantityValue(
                              product.id,
                              product.quantity + 1
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className={classes.total}>
                      <Button
                        buttonColor="red"
                        buttonSize="btn--medium"
                        buttonStyle="btn--primary"
                        onClick={(id) => removeItem(product.id)}
                      >
                        Remove Item
                      </Button>
                      <p>
                        Total: {(product.quantity * product.price).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p>Your Cart is empty, Please add some items</p>
              )}
            </div>
            <div className={classes.grand}>
              <Button
                onClick={hideCartModal}
                buttonStyle="btn--wide"
                buttonColor="red-text"
              >
                Close
              </Button>
              {cart.length > 0 ? (
                <div className={classes["place-order"]}>
                  <h4 className={classes.total}> Grand Total: {total} </h4>
                  <Button buttonColor="green" onClick={placeOrder}>
                    Place Order
                  </Button>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </Modal>
      ) : (
        <IconContext.Provider value={{ color: "green" }}>
          <button className={classes.cartIconBtn} onClick={showCartModal}>
            <span className={classes.icon}>
              <BsFillCartFill />
            </span>
            <span>Your Cart {cart.length}</span>
          </button>
        </IconContext.Provider>
      )}
      <ToastContainer />
    </>
  );
};

export default Cart;
