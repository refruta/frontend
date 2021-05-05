import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

export function HomePage () {

  return (
    <div className="container">
      <div className="row">
        <h1>Online Exam Portal</h1>
      </div>
      <div className="row">
        <div className="two columns">
          <Link to="/add-user">
            <button className="button-primary">Registration</button>
          </Link>
        </div>
      </div>
      
      <div className="row">
        <div className="two columns">
          <Link to="/adminlogin">
            <button className="button-primary">Admin Login</button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="two columns">
          <Link to="/login">
            <button className="button-primary">User Login</button>
          </Link>
        </div>
      </div>

      </div>
  );
}
