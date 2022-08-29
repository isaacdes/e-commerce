import classes from "./authGuard.module.scss";
import { Link } from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify'


const authGuard = (WrappedComponent) => {
  return () => {
    const token = localStorage.getItem("token");
    
    if (!token) {
        toast.error("Acces is denied")
      return (
        <div className={classes.message}>
          <div className={classes.content}>
            <h1>Access Denied, Consider logging in</h1>
            <Link to="/login"> Click here to Login</Link>
          </div>
          <ToastContainer/>
        </div>
      );
    } else {
      return <WrappedComponent />;
    }
  };
};

export default authGuard;
