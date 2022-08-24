import React from "react";
import "./Card.scss";

import { useDispatch } from "react-redux";
import { selectedProducts } from "../../../redux/actions/productActions";

const Card = (props) => {
  const dispatch = useDispatch();
  const onModalClick = () => {
    dispatch(selectedProducts(props));
  };
  return (
    <div className="card" onClick={onModalClick}>
      <div className="card-body">
        <img src={props.imageUrl} alt={props.alt} className="card-img" />
        <h3 className="card-title">{props.title} </h3>
        <b className="card-category">{props.brand}</b>

        <p className="card-price">Cost : {props.price}$</p>
      </div>
    </div>
  );
};

export default Card;
