import React , {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import  {useDispatch} from 'react-redux'
import { clearState } from "../../redux/fakeStore/fakeStoreSlice";
import { logoutUser } from "../../redux/userStore/userStoreSlice";

/**
 * This function logouts a user and clears the token 
 * @returns upon logging out it navigates to the "/login" route
 */
const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(()=>{
    localStorage.clear("token");
    dispatch(clearState())
    dispatch(logoutUser())
    navigate("/login");
  }, [navigate, dispatch])
  

  return <div>Logout</div>;
};

export default Logout;
