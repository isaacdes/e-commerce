import Button from "../../UI/Button/Button";
import React from "react";
import classes from "./Dashboard.module.scss";
import { useNavigate } from "react-router-dom";

/**
 * This functions renders the Dashboard component.
 * the component uses styles from Dashboard.module.scss
 * @returns It return the Dashboard/Home Component
 */
const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.section}>
      <h1>I always say shopping is cheaper than a psychiatrist.</h1>
      <p>What are you waiting for?</p>
      <div className={classes["section-btns"]}>
        <Button
          onClick={() => {
            navigate("/products");
          }}
        >
          Check Our Products
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
