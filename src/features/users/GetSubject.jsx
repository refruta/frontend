import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from "react-router-dom";
import {useEffect,React} from "react";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getSubject } from "./usersSlice";
export function GetSubject() {
  const dispatch = useDispatch();
  const [subject_id, setSubject_id] = useState("");
  const { isError,errorMessage,loading } = useSelector((state) => state.users);
  const { entity } = useSelector((state) => state.users);
  const handleSubjectId = (event) => setSubject_id(event.target.value);

  useEffect (() => {
    dispatch(getSubject(subject_id));
  }, [subject_id]);
console.log(entity)

return (
    <div>
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
       <a class="nav-item nav-link active" >Get Subject<span class="sr-only">(current)</span></a>
      <Link to="/addsubject">
            <a class="nav-item nav-link" >Add Subject</a>
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
      <a class="nav-item nav-link" href="/login">Logout</a>
    
    </div>
  </div>
</nav> 
</div>
<div class="container">
      <div className="form-group">
          <label>Subject Id</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter the subject id"
            onChange={handleSubjectId}
          />
        </div>
       <div>
       {isError || errorMessage != null ? (
          <h6 >{errorMessage} </h6> 
        ) : (
          <> </>
        )}
       
       </div> 
       <div class="container">
        {loading ? (
          "Loading..."
          ) : (
          <table class="table-hover table-light">
        <thead>
              <tr>
                <th>SubjectId</th>
                <th>Subject Name</th>
                <th>No Of Questions</th>
                <th>Level</th>
                <th>Duration</th>

              </tr>
        </thead>
            <tbody>
              <tr>
                <td>
                    {
                        entity && entity['subject_id']
                    }
                </td>
                
                <td>
                    {
                        entity && entity['subjectName']
                    }
                </td>
                
                <td>
                    {
                        entity && entity['noOfQuestions']
                    }
                </td>
                <td>
                    {
                        entity && entity['level']
                    }
                </td>
                <td>
                    {
                        entity && entity['duration']
                    }
                </td>
                </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
    </div>
  );
 /* return /*(
    <form>
      <div className="col-md-6 container">
        <h3 className="text-center">Add Subject</h3>
        <div className="form-group">
          <label>Subject Id</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter the subject name"
            onChange={handleSubjectId}
          />
        </div>
          <h6>{error}</h6>
        
        <button
          type="button"
          className="btn btn-primary btn-block"
         //</div> onClick={handleClick}
        
        >
         Get Subject
        </button>
        <table>
            <td>
            {entityById && entityById.tags && 
                entityById.tags.map((subject) => {
                    <div>
                    <span class="badge badge-secondary" key={subject.subjectName}>
                      {subject.subjectName}
                      {subject.noO}
                    </span>
                    </div>
                })
            }
            </td>
            
       </table>
      </div>
    </form>
  );
        */}