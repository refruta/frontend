import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import {useEffect,React} from "react";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getQuestion } from "./usersSlice";
export function GetQuestion() {
  const dispatch = useDispatch();
  const [subject_id, setSubject_id] = useState("");
  const [deleteId, setDeleteId] = useState("");
 
  const { loading } = useSelector((state) => state.users);
  const { isError ,errorMessage,entities } = useSelector((state) => state.users);
  const handleSubjectId = (event) => setSubject_id(event.target.value);
  const handledeletevalue = (event) => setDeleteId(event.target.value);

  useEffect (() => {
    dispatch(getQuestion(subject_id));
  }, [subject_id]);
return (
    <div >
      
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
       <a class="nav-item nav-link active" >Get Question<span class="sr-only">(current)</span></a>
      <Link to="/addsubject">
            <a class="nav-item nav-link" >Add Subject</a>
      </Link>
      
      <Link to="/getsubject">
      <a class="nav-item nav-link" >Get Subject</a>
      </Link>
      <Link to="/addQuestion">
      <a class="nav-item nav-link">Add Question</a>
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
          <label>Subject Id</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter the subject id"
            onChange={handleSubjectId}
          />
        </div>
        {isError || errorMessage != null ? (
          <h6 >{errorMessage} </h6> 
        ) : (
          <> </>
        )}
       
      <div className="container">
        {loading ? (
          "Loading..."
        ) : (
          <table class="table-hover table-light" >            
        <thead >
            <tr>
                <th className="align-middle">Question Id</th>
                <th className="align-middle">Question Name</th>
                <th className="align-middle">Option 1</th>
                <th className="align-middle">Option 2</th>
                <th className="align-middle">Option 3</th>
                <th className="align-middle">Option 4</th>
                <th className="align-middle">Level</th>
                <th className="align-middle">Marks</th>
            </tr>
        </thead>
            <tbody>
                    {entities && entities.map(({questionId,questionName,option1,option2,option3,option4,level,marks},i)=>(
                      <tr key={i}>
                            <td>{questionId}</td>
                            <td>{questionName}</td>
                            <td>{option1}</td>
                            <td>{option2}</td>
                            <td>{option3}</td>
                            <td>{option4}</td>
                            <td>{level}</td>
                            <td>{marks}</td>
                        </tr>
                    ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}