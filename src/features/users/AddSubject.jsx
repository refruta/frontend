
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { addSubject } from "./usersSlice";
import './AddSubject.css'
export function AddSubject() {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const { isSuccess,isError,errorMessage,successMessage } = useSelector((state) => state.users);
  const [subjectName, setSubjectName] = useState("");
  const [noOfQuestions, setNoOfQuestions] = useState("");
  const [level, setLevel] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubjectName = (event) => setSubjectName(event.target.value);
  const handleNoOfQuestions = (event) => setNoOfQuestions(event.target.value);
  const handleLevel = (event) => setLevel(event.target.value);
  const handleDuration = (event) => setDuration(event.target.value);

  const handleClick = () => {
    if (subjectName && noOfQuestions && level && duration) {
      dispatch(
        addSubject({
          subjectName,
          noOfQuestions,
          level,
          duration,
        })
        );
        setError('');
    }else{
      setError("Fill in all fields");
    }
  };
  return (
    <div class="bg-light">
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
       <a class="nav-item nav-link active" >Add Subject<span class="sr-only">(current)</span></a>
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
      <a class="nav-item nav-link" href="/login">Logout</a>
    
    </div>
  </div>
</nav> 
</div> 
    <form>
      <div className="col-md-6 container" id="f">
        <div className="form-group">
          <label>Subject Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the subject name"
            onChange={handleSubjectName}
            />
        </div>
        <div className="form-group">
          <label>No of questions</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter the no of question"
            onChange={handleNoOfQuestions}
            />
        </div>
        <div className="form-group">
          <label>Level</label>
          <input
            type="number"
            className="form-control"
            onChange={handleLevel}
            placeholder="Enter the test level"
            />
        </div>
        <div className="form-group">
          <label>Duration</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter the duration"
            onChange={handleDuration}
            />
        </div>
        <div>
        {isSuccess  ? (
       <h6 id="s" >{successMessage} </h6> 
      ) : (
        <h6></h6>
      )} 
     {isError || errorMessage != null ? (
       <h6 id="failure">{errorMessage} {error}</h6> 
      
       ) : (
        <> </>
      )}
          
        </div>
        <button
          type="button"
          className="btn btn-primary btn-block"
          onClick={handleClick}
          >
         Add Subject
        </button>
      </div>
    </form>
          </div>
  );
}