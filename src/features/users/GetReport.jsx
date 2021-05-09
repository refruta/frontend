import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState ,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { getReport } from "./usersSlice";
export function GetReport() {

    const dispatch = useDispatch();
    const [error , setError ] = useState("")
    const [reportId, setReportId] = useState("");
    const { isError,errorMessage,loading } = useSelector((state) => state.users);
    const { entity } = useSelector((state) => state.users);
    const handleReportId = (event) => setReportId(event.target.value);
    
  useEffect (() => {
    dispatch(getReport(reportId));
  }, [reportId]);

return( <div >
   <div class="navbar-toggle"> 
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="adminpage">
  <a class="navbar-brand">Admin Panel</a>
  </Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
       <a class="nav-item nav-link active" >Get Report<span class="sr-only">(current)</span></a>
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
      <a class="nav-item nav-link" href="/login">Logout</a>
    
    </div>
  </div>
</nav> 
</div>

    <div class="container">
    <div className="form-group">
        <label>Report Id</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter the report id"
          onChange={handleReportId}
          />
      </div>
     <div>
     {isError || errorMessage != null ? (
       <h6 >{errorMessage} </h6> 
       ) : (
         <> </>
         )}
     
     </div> 
     <div className="container">
      {loading ? (
        "Loading..."
        ) : (
          <table class="table-hover table-light">
      <thead>
            <tr>
              <th>Student Name</th>
              <th>Student Email</th>
              <th>Test Date</th>
              <th>Cleared Level</th>
              <th>Subject Name</th>
              <th>Marks Obtained</th>
              <th>Total Marks</th>
            </tr>
      </thead>
          <tbody>
              <tr>

              <td>
                  {
                    entity && entity['name']
                  }
              </td>
              <td>
                  {
                    entity && entity['email']
                  }
              </td>
              <td>
                  {
                    entity && entity['dateAndTimeOfTest']
                  }
              </td>
              <td>
                  {
                    entity && entity['level']
                  }
              </td>
              <td>
                  {
                    entity && entity['subjecName']
                  }
              </td>
              <td>
                  {
                    entity && entity['testScore']
                  }
              </td>
              <td>
                  {
                    entity && entity['totalScore']
                  }
              </td>
              </tr>

          </tbody>
        </table>
      )}
      </div>
    </div>
  </div>)
}