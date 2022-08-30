import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import classes from "./Login.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { RegisterApi } from "../../redux/userStore/asyncReducer";

/**
 *This SignUp() will register a new user
 * @returns a atoken which is set in the redux state and localstorage
 */
const SignUp = () => {
  const toastOptions = {
    position: "top-right",
    autoClose: 2000,
    pauseOnHover: false,
    draggable: true,
    theme: "dark",
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  /**
   * Updates email state on every keystroke
   * @param {*} item
   */
  const onEmailChangeHandler = (item) => {
    setEmail(item.target.value);
    // console.log(email);
  };

  /**
   * updates password state on every keystroke
   * @param {*} item
   */
  const onPasswordChangeHandler = (item) => {
    setPassword(item.target.value);
    // console.log(password);
  };

  /**
   * Updates name state on every keystroke
   * @param {*} item
   */
  const onNameChangeHandler = (item) => {
    setName(item.target.value);
  };

  /**
   * This function checks for input validations
   * @returns true or false based on the input validations
   */
  const inputValidations = () => {
    if (name === "") {
      toast.error("Name cannot be empty", toastOptions);
      return false;
    } else if (name.length <= 2) {
      toast.error("Name should be >3 characters long");
      return false;
    }
    if (!/^[a-zA-Z ]*$/.test(name)) {
      toast.error("Name can contain only alpahbets");
      return false;
    }

    if (email === "") {
      toast.error("Email cannot be empty", toastOptions);
      return false;
    }
    // eslint-disable-next-line
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      toast.error("Email format is wrong", toastOptions);
      return false;
    }

    if (password === "") {
      toast.error("Password cannot be empty", toastOptions);
      return false;
    } else if (password.length <= 6) {
      toast.error("Password should >6 characters long", toastOptions);
      return false;
    }
    return true;
  };

  /**
   * This functioncancels the event if the conditions are not meant.
   * It calls checkValidation() and upon return true it calls a RegisterApi which then checks with the server for succees register and catches erorr if exist
   * for testing only {
    "email": "eve.holt@reqres.in",
    "password": "pistol" is accepted for success
}
   * @param {*} event
   */
  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const checkValidation = inputValidations();
    // console.log(checkValidation);
    if (checkValidation) {
      const response = await dispatch(
        RegisterApi({
          email,
          password,
        })
      );

      if (response.payload.success) {
        localStorage.setItem("token", response.payload.data.token);
        navigate("/products");
      } else {
        toast.error(
          `User cannot be created ${response.payload.data}`,
          toastOptions
        );
      }
    }
  };
  return (
    <div className={classes["form-container"]}>
      <div className={classes["form"]}>
        <h1>Register User</h1>
        <Input
          label="Name"
          id="name"
          type="text"
          value={name}
          onChange={onNameChangeHandler}
        />
        <Input
          label="Email ID"
          id="email"
          type="email"
          value={email}
          onChange={onEmailChangeHandler}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          value={password}
          onChange={onPasswordChangeHandler}
        />
        <Button onClick={onSubmitHandler}>Register User </Button>
        <span>
          Already have an account ?<Link to="/login">Login</Link>
        </span>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
