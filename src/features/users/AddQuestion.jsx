import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addQuestion } from "./usersSlice";
import { Link } from "react-router-dom";
import './AddQuestion.css'
export function AddQuestion() {
  const dispatch = useDispatch();
  
  const { isSuccess,successMessage,isError,errorMessage,loading } = useSelector((state) => state.users);
  const [error, setError] = useState(null);
  const [subject_id, setSubjectId] = useState("");
  const [questionName, setQuestionName] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [marks, setMarks] = useState("");
  const [level, setLevel] = useState("");

  const handleSubjectId = (event) => setSubjectId(event.target.value);
  const handleQuestionName = (event) => setQuestionName(event.target.value);
  const handleOption1 = (event) => setOption1(event.target.value);
  const handleOption2 = (event) => setOption2(event.target.value);
  const handleOption3 = (event) => setOption3(event.target.value);
  const handleOption4 = (event) => setOption4(event.target.value);
  const handleCorrectAnswer = (event) => setCorrectAnswer(event.target.value);
  const handleMarks = (event) => setMarks(event.target.value);
  const handleLevel = (event) => setLevel(event.target.value);


  const handleClick = () => {
    if (subject_id && questionName && option1 && option2 && option3 && option4 && marks && level && correctAnswer) {
        dispatch(
        addQuestion(
            {
                subject_id,questionName,option1,option2,option3,option4,marks,level,correctAnswer
            }
            )
        );
        setError("")
    }else{
      setError("Fill in all fields");
    }
  };
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
       <a class="nav-item nav-link active " >Add Question<span class="sr-only">(current)</span></a>
      <Link to="/addsubject">
            <a class="nav-item nav-link" >Add Subject</a>
      </Link>
      <Link to="/getsubject">
      <a class="nav-item nav-link">Get Subject</a>
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
    <form id="q"class="row-md-2">
      <div className="col-md-6 container">
        <h3 className="text-center">Add Question Details</h3>
        <div className="form-group">
          <label>Enter Subject Id</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter the subject id"
            onChange={handleSubjectId}
            />
        </div>
        <div className="form-group">
          <label>Enter the Question Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter The Question"
            onChange={handleQuestionName}
            />
        </div>
        <div className="form-group">
          <label>Option A</label>
          <input
            type="text"
            className="form-control"
            onChange={handleOption1}
            placeholder="Enter the option 1"
            />
        </div>
        <div className="form-group">
          <label>Option B</label>
          <input
            type="text"
            className="form-control"
            onChange={handleOption2}
            placeholder="Enter the option 2"
            />
        </div>
        <div className="form-group">
          <label>Option C</label>
          <input
            type="text"
            className="form-control"
            onChange={handleOption3}
            placeholder="Enter the option 3"
            />
        </div>
        <div className="form-group">
          <label>Option D</label>
          <input
            type="text"
            className="form-control"
            onChange={handleOption4}
            placeholder="Enter the option 4"
            />
        </div>
        <div className="form-group">
          <label>Correct Answer</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the correct answer"
            onChange={handleCorrectAnswer}
            />
        </div>
        <div className="form-group">
          <label>Level</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter the level"
            onChange={handleLevel}
            />
        </div>
        <div className="form-group">
          <label>Marks For The Question</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter the marks"
            onChange={handleMarks}
            />
        </div>
        <div>
        {isSuccess  ? (
       <h6 id="s" >{successMessage} </h6> 
      ) : (
        <h6></h6>
      )} 
        </div>
        <div>
       {isError || errorMessage != null ? (
          <h6 >{errorMessage} {error}</h6> 
        ) : (
          <> </>
        )}
       
       </div> 
        <button
          type="button"
          className="btn btn-primary btn-block"
          onClick={handleClick}
          >
         Add Question
        </button>

      </div>
    </form>
          </div>
  );
}