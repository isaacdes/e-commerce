import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  setProducts,
  removeSelectedProducts,
} from "../../../redux/actions/productActions";
import Card from "../../UI/Card/Card";
import axios from "axios";
import "./Products.scss";
import SelectedProduct from "./SelectedProduct";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);

  const [selectedProductShown, setSelectedProductShown] = useState(false);

  const showSelectedProduct = (data) => {
    setSelectedProductShown(true);
  };
  const hideSelectedProduct = () => {
    dispatch(removeSelectedProducts());
    setSelectedProductShown(false);
  };

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("error", err);
      });

    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products-wrapper">
      <h1>All Products</h1>
      <div className="product-list">
        {selectedProductShown && (
          <SelectedProduct onClose={hideSelectedProduct} />
        )}
        {products.map((data) => {
          return (
            <div
              className="card-div"
              onClick={showSelectedProduct}
              key={data.id}
            >
              <Card
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
