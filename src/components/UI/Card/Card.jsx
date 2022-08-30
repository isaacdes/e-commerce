import React from "react";
import classes from "./Card.module.scss";

/**
 * This is a card component
 * @param {*} props it accepets imageUrl, title, brand as category, and price as props to render the contents on the page
 * @returns it returns a card component with styles added from Card.module.scss
 */
const Card = (props) => {
  return (
    <div className={classes["card"]} onClick={props.onSelect}>
      <div className={classes["card-body"]}>
        <img
          src={props.imageUrl}
          alt={props.alt}
          className={classes["card-img"]}
        />
        <h3 className={classes["card-title"]}>{props.title} </h3>
        <b className={classes["card-category"]}>{props.brand}</b>

        <p className={classes["card-price"]}>Cost : {props.price}$</p>
      </div>
    </div>
  );
};

export default Card;
