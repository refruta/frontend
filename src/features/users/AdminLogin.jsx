import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signInUser } from "./usersSlice";
export function AdminLogin() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isUserLoggedIn,isError, errorMessage, isAdminLoggedIn,successMessage } = useSelector(
    (state) => state.users
  );
  const [error, setError] = useState(null);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleUserName = (event) => setUserName(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);
if(isAdminLoggedIn){
    history.push("/adminpage")
}
else if(isUserLoggedIn){
  history.push("/userPage")
}
  const handleClick = () => {
 
     if (username && password) {
      try{
          dispatch(signInUser({username, password})) 
        //history.push("/adminpage");
        }catch(Exception){
      }
      setError('')
    }
    else{
      setError("Fill in all fields")
    }
    
  };

  return (
    
    <form>
      <div className="col-md-6 container">
        <h3 className="text-center"> Login Page</h3>
        <div className="form-group">
          <label>User name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the username"
            onChange={handleUserName}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter the password"
            onChange={handlePassword}
          />
        </div>
        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="checkbox1"
            />
            <label className="custom-control-label" htmlFor="checkbox1">
              Remember me
            </label>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary btn-block"
          onClick={handleClick}
        >
          Submit
        </button>
        <div class="text-danger">

        {isError || error != "" ? (
          <div>
            <h5>{error}</h5>
             <h5>{errorMessage}</h5>
             </div>
   ) : (
            <></>
            )}
            </div>
      </div>
    </form>
  );
}
