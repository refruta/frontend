import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { deleteQuestion, getQuestion } from "./usersSlice";
export function DeleteQuestion() {
  const dispatch = useDispatch();
  const [questionId, setQuestionId] = useState("");
  const { errorMessage,successMessage , loading } = useSelector((state) => state.users);
  const { entities } = useSelector((state) => state.users);
  const handleQuestionId = (event) => setQuestionId(event.target.value);
 const handleClick = () => {
 
     try{
         dispatch(deleteQuestion(questionId)) 
       //history.push("/adminpage");
       }catch(Exception){
       alert('error')
     }
 };
console.log(entities)
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
       <a class="nav-item nav-link active" >Delete Question<span class="sr-only">(current)</span></a>
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
        <h1>Get Questions</h1>
      <div className="form-group">
          <label>Question Id</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter the subject id"
            onChange={handleQuestionId}
            />
        </div>
        <div>
            <button onClick={handleClick}>
                    Delete Question
            </button>
        </div>
        {successMessage != "" ? (
          <h6 >{successMessage}</h6> 
          ) : (
          <></>
          )}
        {errorMessage != "" ? (
          <h6 >{errorMessage}</h6> 
          ) : (
          <></>
          )}
          </div>
           
        
              </div>
  );
}