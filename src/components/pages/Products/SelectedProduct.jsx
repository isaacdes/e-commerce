import Modal from "../../UI/Modal/Modal";
import React from "react";
import { useSelector } from "react-redux";
import "./SelectedProduct.scss";
import Button from "../../UI/Button/Button";

const SelectedProduct = (props) => {
  const product = useSelector((state) => state.product);

  return (
    <Modal onClose={props.onClose}>
      {/* {product.title} */}
      <div className="card">
        <div className="card-body">
          <img src={product.imageUrl} alt={product.alt} className="card-img" />
          <h2 className="card-title">{product.title} </h2>
          <b className="card-category">{product.brand}</b>

          <h3 className="card-price">Cost : {product.price}$</h3>
          <p className="card-description">{product.description}</p>
        </div>
      </div>
      <div className="actions">
        <Button
          buttonColor="red"
          
          onClick={props.onClose}
        >
          Close
        </Button>
        <Button buttonColor="green" onClick={props.onClose}>
          Add to cart
        </Button>
      </div>
    </Modal>
  );
};

export default SelectedProduct;
