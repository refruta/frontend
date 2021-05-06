import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

export function HomePage () {
  return (<div class="bg-light">

<div className="container ">
  <div class="img-fluid">
      <div class="img-fluid text-center">
     <Link to ="/add-user">
      <img src="https://i2.wp.com/www.freestudentprojects.com/wp-content/uploads/2013/04/Online-Examin-Portal.jpg?fit=1024%2C682&ssl=1" alt="Responsive image" width="75%" ></img>
      </Link>
      </div>
  </div>
</div>
  </div>
  );
}
