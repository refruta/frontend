import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import {Link} from 'react-router-dom';
import {useDispatch ,useSelector} from 'react-redux';
import {createReport} from './usersSlice'
export function CreateReport() {
    const dispatch = useDispatch();
//  const history = useHistory();
  const [error, setError] = useState(null);
  const { isSuccess,errorMessage,successMessage ,isError} = useSelector((state) => state.users);
  const [userId, setUserId] = useState("");
  const [testId, setTestId] = useState("");
  const [totalMarks, setTotalMarks] = useState("");

  const handleUserId = (event) => setUserId(event.target.value);
  const handleTestId = (event) => setTestId(event.target.value);
  const handleTotalMarks = (event) => setTotalMarks(event.target.value);
 
  const handleClick = () => {
    if (testId && userId && totalMarks) {
      //   history.push("/userlist");
      dispatch(
        createReport({
            testId,userId,totalMarks
        })
      );
      setError('');
      }else{
        setError("Fill in all fields");
      }
    };

    return(<div>
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
         <a class="nav-item nav-link active" >Create Report<span class="sr-only">(current)</span></a>
         <Link to="/addsubject">
        <a class="nav-item nav-link">Add Subject</a>
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
        <Link to="/getreport">
        <a class="nav-item nav-link" >Get Report</a>
        </Link>
        <a class="nav-item nav-link" href="/login">Logout</a>
    
      </div>
    </div>
  </nav> 
  </div> 
            <form>
              <div className="col-md-6 container">
                <h3 className="text-center">Create Report</h3>
                <div className="form-group">
                  <label>Enter User Id</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter User Id"
                    onChange={handleUserId}
                  />
                </div>
                <div className="form-group">
                  <label>Test Id</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Test Id"
                      onChange={handleTestId}
                  />
                </div>
                <div className="form-group">
                  <label>Total Marks</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Total Marks"
                    onChange={handleTotalMarks}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={handleClick}
                >
                  Create Report
                </button>
                {isSuccess && (successMessage != null) ? (
                  <h6 id ='s'>{successMessage}</h6>
        ) : (
          <></>
        )}
                {isError || (error != "") || (errorMessage !=='') ? (
          <h6 id='failure'>{errorMessage} {error}</h6> 
        ) : (
          <></>
        )}

              </div>
            </form>

    </div>)
}
 