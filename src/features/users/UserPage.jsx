import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
export function UserPage(){
return(<div>    
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Student Panel</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Student<span class="sr-only">(current)</span></a>
      <Link to="/gettest">
       <p class="nav-item nav-link" >Take Test</p>
      </Link>
      <Link to="/getAllReport">
            <p class="nav-item nav-link" >Get Reports</p>
      </Link>
      <a class="nav-item nav-link" href="/login">Logout</a>
    </div>
  </div> 
</nav>  
<div>
    <marquee behavior="alternate" class = "text-success"> <h1>Welcome Students</h1> </marquee>
    <div class="img-fluid text-center" >
      <marquee behavior ="slide" direction="up"><img src="https://envato-shoebox-0.imgix.net/e22e/22f2-11d1-4111-8228-0e2fff3d2cba/syda_0244498.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=77abdd3fbd4cf9c34dc0c0f43dabd031" alt="Responsive image" width="75%" ></img>
      </marquee>
      </div>
</div>
</div>)
}/**
         <div className="row">
           <div className="two columns">  
            <Link to="/gettest">
                <button className="button-primary">Get Test</button>
             </Link>
          </div>
        </div>
        <div className="row">
           <div className="two columns">  
            <Link to="/getReport">
                <button className="button-primary">Get Report</button>
             </Link>
          </div>
        </div>
        <div className="row">
           <div className="two columns">  
            <Link to="/getAllReport">
                <button className="button-primary">Get All Reports </button>
             </Link>
          </div>
        </div>
 */