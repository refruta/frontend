import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminPage.css'
export function AdminPage() {
/*      
    <div>
        <h1>Welcome to Admin Page</h1>
        <div className="row">
        <div className="two columns">
          <Link to="/addsubject">
            <button className="button-primary">Add Subject</button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="two columns">
          <Link to="/getsubject">
            <button className="button-primary">Get Subject</button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="two columns">
          <Link to="/addQuestion">
            <button className="button-primary">Add Question </button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="two columns">
          <Link to="/getquestion">
            <button className="button-primary">Get Question</button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="two columns">
          <Link to="/deletequestion">
            <button className="button-primary">Delete Question</button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="two columns">
          <Link to="/createtest">
            <button className="button-primary">Create Test</button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="two columns">
          <Link to="/create-report">
            <button className="button-primary">Create Report</button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="two columns">
          <Link to="/getreport">
            <button className="button-primary">Get Report</button>
          </Link>
        </div>
      </div>
    <div>
  </div>
  <div>*/ 
  return(
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Admin Panel</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Admin<span class="sr-only">(current)</span></a>
      <Link to="/addsubject">
       <a class="nav-item nav-link" >Add Subject</a>
      </Link>
      <Link to="/getsubject">
            <a class="nav-item nav-link" >Get Subject</a>
      </Link>
      <Link to="/addQuestion">
      <a class="nav-item nav-link">Add Question</a>
      </Link>
      <Link to="/getquestion">
      <a class="nav-item nav-link" >Get Question</a>
      </Link>
      <Link to="/deletequestion">
      <a class="nav-item nav-link" >Delete Question</a>
      </Link>
      <Link to="/createtest">
      <a class="nav-item nav-link">Create Test</a>
      </Link>
      <Link to="/create-report">
      <a class="nav-item nav-link">Create Report</a>
      </Link>
      <Link to="/getreport">
      <a class="nav-item nav-link" >Get Report</a>
      </Link>
    </div>
  </div>
</nav>  
<div className="container ">
  <marquee  behavior="alternate"><h1 class="text-success">Welcome to admin portal</h1></marquee>
  <div class="img-fluid">
      <div class="img-fluid text-center" >
      <marquee behavior ="slide" direction="up" ><img src="https://thumbs.dreamstime.com/b/admin-login-sign-table-made-wood-68499314.jpg" alt="Responsive image" width="75%" ></img>
      </marquee>
      </div>
  </div>
</div>
</div>
)
}