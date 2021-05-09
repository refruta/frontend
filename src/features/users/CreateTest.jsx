import {Link} from 'react-router-dom';
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { createTest } from "./usersSlice";
import 'bootstrap/dist/css/bootstrap.min.css';
export function CreateTest() {
    const dispatch = useDispatch();
    const [userId, setUserId] = useState("");
    const [subject_id, setSubjectId] = useState("");
    const [level, setLevel] = useState("");
    const [error, setError] = useState("");
    
    const { errorMessage,successMessage ,isError,isSuccess, loading } = useSelector((state) => state.users);

    const handleUserId = (event) => setUserId(event.target.value);
    const handleSubjectId = (event) => setSubjectId(event.target.value);
    const handleLevel = (event) => setLevel(event.target.value);
    
   const handleClick = () => {
   if(userId && subject_id && level){
       dispatch(createTest({userId,subject_id,level})) 
       //history.push("/adminpage");
       setError('');
    }
    else{
      setError("Enter in all fields")
    }
   };

    return(
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
         <a class="nav-item nav-link active" >Create Test<span class="sr-only">(current)</span></a>
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
        <div className="col-md-6 container">
        <div className="form-group">
        <label>Enter The User Id</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter the user id"
          onChange={handleUserId}
        />
      </div>
      <div className="form-group">
        <label>Enter The Subject Id</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter the subject id"
          onChange={handleSubjectId}
        />
      </div>
      <div className="form-group">
        <label>Enter the level</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter the  level"
          onChange={handleLevel}
        />
      </div>
          <button type="button" 
          className="btn btn-primary btn-block"
          onClick={handleClick} >
                  Create Test
          </button>
          <div>
          {isSuccess && (successMessage != null) ? (
         <h6 id="s" >{successMessage} </h6> 
        ) : (
          <h6></h6>
        )} 
       {isError ||  (errorMessage != null) ? (
         <h6 id="failure">{errorMessage} {error}</h6> 
        
         ) : (
          <> </>
        )}
            
          </div>
        </div>
      </form>
            </div>
            )
}
/*<div className="container">
    <div className="row">
      <h1>Create Test</h1>
    </div>
    <div className="form-group">
        <label>Enter The User Id</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter the user id"
          onChange={handleUserId}
        />
      </div>
      <div className="form-group">
        <label>Enter The Subject Id</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter the subject id"
          onChange={handleSubjectId}
        />
      </div>
      <div className="form-group">
        <label>Enter the level</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter the  level"
          onChange={handleLevel}
        />
      </div>
          <button onClick={handleClick} >
                  Submit
          </button>

         
        {isSuccess && successMessage != "" ? (
          <h6 >{successMessage}</h6> 
        ) : (
          <></>
        )}
        {isError && errorMessage != "" ? (
          <h6 >{errorMessage}</h6> 
        ) : (
          <></>
        )}
            </div> */ 