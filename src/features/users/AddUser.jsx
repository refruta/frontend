import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signUpUser } from "./usersSlice";
export function AddUser() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState(null);

  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const { isSuccess,isError,errorMessage,successMessage } = useSelector((state) => state.users);
  const handleName = (event) => setName(event.target.value);
  const handleUserName = (event) => setUserName(event.target.value);
  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);
  const handleRole = (event) => setRole(event.target.value)
  if(isSuccess){
    history.push("/login")
  }
  const handleClick = () => {
    if (name && username && email && password && role) {
      dispatch(
        signUpUser({
          name,
          username,
          email,
          password,
          role,
        })
      );
      // history.push("/adminlogin");
        setError('')
    }else{
      setError("Fill in all fields");
    }
  };
  return (
    <form class="container" >
      <div className="col-md-6 container">
        <h3 className="text-center">Register</h3>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            onChange={handleName}
          />
        </div>
        <div className="form-group">
          <label>User name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter user name"
            onChange={handleUserName}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            onChange={handleEmail}
            placeholder="Enter the email address"
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
          <label>Role</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Role"
            onChange={handleRole}
          />
        </div>
        <div>
     {successMessage}
     {isError || errorMessage != null ? (
        <h6 >{errorMessage} </h6> 
      ) : (
        <> </>
      )}
     {error}
     </div> 
        <button
          type="button"
          className="btn btn-primary btn-block"
          onClick={handleClick}
        >
          Register
        </button>
        <p className="mt-2  d-flex justify-content-end">
          Already registered?{" "}
          <Link className="nav-link pt-0 pr-0" to="/login">
            Login here
          </Link>
        </p>
      </div>
    </form>
  );
}