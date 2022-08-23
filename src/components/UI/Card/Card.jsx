import React from "react";
import "./Card.scss";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <img src={props.imageUrl} alt={props.alt} className="card-img" />
        <h2 className="card-title">{props.title} </h2>
        <p className="card-brand">{props.brand}</p>
        <p className="card-description">{props.description}</p>
      </div>
      <button className="card-btn">Add +</button>
    </div>

    // <div className="box">
    //   <img src={props.imageUrl} alt={props.alt} />
    //   <div className="padding">
    //     <label>{props.title}</label>
    //     <p>{props.brand}</p>
    //     <h2>{props.price}</h2>
    //     <p>{props.description}</p>
    //   </div>
    //   <ul className="btnnav">
    //     <li>
    //       <button className="btn btnbuy">Buy</button>
    //     </li>
    //   </ul>
    // </div>
  );
};

export default Card;