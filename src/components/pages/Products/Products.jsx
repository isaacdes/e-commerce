import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetch_Products } from "../../../redux/fakeStore/asyncReducers";

import Card from "../../UI/Card/Card";

import classes from "./Products.module.scss";

/**
 * this component renders the product page and displays each product using a Card component.
 * This component uses styles from Products.module.scss
 * @returns It returns the Products component with the products fecthed from the server("https://fakestoreapi.com/products")
 */
const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => state.fakeStore.products);
  // products.filter()

  useEffect(() => {
    dispatch(fetch_Products());
  }, [dispatch]);

  return (
    <div className={classes["products-wrapper"]}>
      <h1>All Products</h1>
      <div className={classes["product-list"]}>
        {products.map((data) => {
          return (
            <div className={classes["card-div"]} key={data.id}>
              <Card
                onSelect={() => {
                  navigate(`/product/${data.id}`);
                }}
                imageUrl={data.image}
                title={data.title}
                price={data.price}
                description={data.description}
                brand={data.category}
              ></Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
