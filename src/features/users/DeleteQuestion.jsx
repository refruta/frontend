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
    <div className="container">
      <div className="row">
        <h1>Get Questions</h1>
      </div>
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
  );
}