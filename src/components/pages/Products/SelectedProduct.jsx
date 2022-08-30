import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { addToCart } from "../../../redux/fakeStore/fakeStoreSlice";
import Button from "../../UI/Button/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import classes from "./SelectedProduct.module.scss";

/**
 * The function renders the selectedproduct component, and also allows to add to cart and cancel(back to products page).
 * It uses styles from SelectedProduct.module.scss
 * @param {*} props It is the id that is passed to this page route
 * @returns It returns the entire detail of the product selected. 
 */
const SelectedProduct = (props) => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toastOptions = {
    position: "top-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const product = useSelector(
    (state) => state.fakeStore.products[`${productId}` - 1]
  );

  useEffect(() => {
    if (product === undefined) {
      navigate("/products");
    }
  }, [product, navigate]);

  /**
   * this function navigates to "/products"
   */
  const onCancel = () => {
    navigate("/products");
  };

  /**
   * this functions adds the product to cart by dispatching the onAddCart from the fakeStoreSlice.js
   */
  const onAddToCart = () => {    
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        quantity: 1,
        
      })
    );
    // console.log("added to cart")
    toast.success(product.title +" is added to the cart", toastOptions)
  };

  return (
    <div>
      
      {product && (
        <div className={classes.card}>
          <div className={classes["card-body"]}>
            <img
              src={product.image}
              className={classes["card-img"]}
              alt="imagePhoto"
            />
            <div className={classes.content}>
              <h1>{product.title}</h1>
              <h2>{product.category}</h2>
              <p>{product.description}</p>

              <div className={classes.rating}>
                <h3>Price :{product.price}$</h3>
                <p>Rating {product.rating.rate} out of 5</p>
              </div>

              <div className={classes.actions}>
                <Button
                  buttonColor="green"
                  onClick={onAddToCart}
                  buttonSize="btn--large"
                >
                  Add to Cart
                </Button>
                <Button
                  buttonColor="red"
                  buttonSize="btn--large"
                  onClick={onCancel}
                >
                  Cancel
                </Button>
                
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default SelectedProduct;
