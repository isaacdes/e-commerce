import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import classes from "./Login.module.scss";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
// import { LoginAPI } from "./Operations";
import { useDispatch } from "react-redux";
// import { loginUser } from "../../redux/userStore/userStoreSlice";
import { LoginApi } from "../../redux/userStore/asyncReducer";

/**
 * This Login() will facilitate with the loginApi(from the Operations.js) and navigates you to the products page.
 * It uses the styles from Login.module.scss
 * For successfull login enter email ="eve.holt@reqres.in" and password="cityslicka"
 * @returns a token which is updated in the redux state and local storage
 *  Apon succeefull authentication the page is navigated to "/products" route
 *
 */
const Login = () => {
  const toastOptions = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 
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
   * This function checks for input validations
   * @returns true or false based on the input validations
   */
  const inputValidations = () => {
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
   * This function takes cancels the event if the conditions are not meant.
   * It calls checkValidation() and upon return true it calls a LoginAPi which then checks with the server for succees login and catches erorr if exist
   * @param {*} event
   */
  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const checkValidation = inputValidations();
    // console.log(checkValidation);
    if (checkValidation) {
      const response = await dispatch(
        LoginApi({
          email,
          password,
        })
      );
      if(response.payload.success){
        localStorage.setItem("token", response.payload.data.token)
        navigate('/products')
      }
      else {
        toast.error(`Invalid Credentials ${response.payload.data}`, toastOptions)
      }
      

      // LoginAPI({
      //   email: email,
      //   password: password,
      // })
      //   .then((response) => {
      //     // console.log(response.data.token)
      //     dispatch(loginUser())
      //     localStorage.setItem("token", response.data.token);
      //     navigate("/products");
      //   })
      //   .catch((error) => {
      //     toast.error(`Invalid credentials ${error.message}`, toastOptions);
      //   });
    }
  };
  return (
    <div className={classes["form-container"]}>
      <div className={classes["form"]}>
        <h1>User Credentials</h1>
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
        <Button onClick={onSubmitHandler}>Login </Button>
        <span>
          Dont have an account?<Link to="/register">Register</Link>
        </span>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
