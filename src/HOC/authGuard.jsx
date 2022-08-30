import classes from "./authGuard.module.scss";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";

/**
 * This is a high order component
 * it check for isUsetLogged in and if its true then it renders the wrapped component
 * else it renders a access denied page
 * @param {*} WrappedComponent the compo
 * @returns It return an an error if user is not logged in else it renders the wrapped component
 */
const authGuard = (WrappedComponent) => {
  return () => {
    const isUserLoggedIn = useSelector((state) => state.userStore.userIsLogged);
    // const token = localStorage.getItem("token");

    if (!isUserLoggedIn) {
      toast.error("Access is denied");
      return (
        <div className={classes.message}>
          <div className={classes.content}>
            <h1>Access Denied, Consider logging in</h1>
            <Link to="/login"> Click here to Login</Link>
          </div>
          <ToastContainer />
        </div>
      );
    } else {
      return <WrappedComponent />;
    }
  };
};

export default authGuard;
