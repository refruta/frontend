import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addQuestion } from "./usersSlice";
export function AddQuestion() {
  const dispatch = useDispatch();
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
    }else{
      setError("Fill in all fields");
    }
  };
  return (
    <form>
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
          <h6>{error}</h6>
        <button
          type="button"
          className="btn btn-primary btn-block"
          onClick={handleClick}
        >
         Add Question
        </button>

      </div>
    </form>
  );
}