import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
export function AdminPage() {
    return(
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
    
    </div>)
}