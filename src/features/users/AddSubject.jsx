
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSubject } from "./usersSlice";
export function AddSubject() {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

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
    }else{
      setError("Fill in all fields");
    }
  };
  return (
    <form>
      <div className="col-md-6 container">
        <h3 className="text-center">Add Subject</h3>
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
            type="text"
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
          <h6>{error}</h6>
        <button
          type="button"
          className="btn btn-primary btn-block"
          onClick={handleClick}
        >
         Add Subject
        </button>

      </div>
    </form>
  );
}