import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect,React} from "react";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { getQuestions } from "./usersSlice";
import { createResponse } from "./usersSlice";
export function GetTest() {
  const history  = useHistory();
  const dispatch = useDispatch();
  const [testId, setTestId] = useState("");
  const [optionChosen, setOptionChosen] = useState("");
  const [qid, setQid] = useState("");
  
  const [level, setLevel] = useState("");
  const { loading } = useSelector((state) => state.users);
  const { entities } = useSelector((state) => state.users);
  const handleTestId = (event) => setTestId(event.target.value);
  const handleLevel = (event) => setLevel(event.target.value);
  const handleOptionChosen = (event) => setOptionChosen(event.target.value);
  const handleQuestionId = (event) => setQid(event.target.value);
  /*
  useEffect (() => {
    dispatch(getQuestions({testId,level}));
  }, [testId,level]);*/
  const handleClick = () => {
     try{
         dispatch(getQuestions({testId,level})) 
       //history.push("/adminpage");
       }catch(Exception){
       alert('error')
     }
   
    };
   // console.log(entities)
   const handleResponse = () => {
    try{
        dispatch(createResponse({optionChosen,testId,qid})) 
      //history.push("/adminpage");
      }catch(Exception){
      alert('error')
    }
  
   };
 const handleSubmit = ()=>{
   history.push("/submit")
 }
return (
    <div className="container">
      <div className="row">
        <h1>Test</h1>
      </div>
      <div className="form-group">
          <label>Test Id</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter the subject id"
            onChange={handleTestId}
          />
        </div>
      <div className="form-group">
          <label>Level</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter the Level"
            onChange={handleLevel}
          />
        </div>
        <div className="form-group">
            <button onClick={handleClick}>
                    Get Test
            </button>
        </div>
 
      <div className="row">
        {loading ? (
          "Loading..."
        ) : (
             <table className="u-full-width" >
        <thead>
            <tr className="column">
                <th>Question Id</th>
                <th>Question Name</th>
                <th>Option 1</th>
                <th>Option 2</th>
                <th>Option 3</th>
                <th>Option 4</th>
                <th>Level</th>
                <th>Marks</th>
                <th>Correct Answer</th>
            </tr>
        </thead>
            <tbody>
                <td>
                    {entities && entities.map(({questionId,questionName,option1,option2,option3,option4,level,marks},i)=>(
                      
                        <tr className="row" key={i}>
                            <button onClick={handleQuestionId} value={questionId}>{questionId}</button>
                            <td>{questionName}</td>
                          <div className="row">
                            <button onClick={handleOptionChosen} value={option1}>{option1}</button>
                            <button onClick={handleOptionChosen} value={option2}>{option2}</button>
                            <button onClick={handleOptionChosen} value={option3}>{option3}</button>
                            <button onClick={handleOptionChosen} value={option4}>{option4}</button>
                            </div>
                            <td>{level}</td>
                            <td>{marks}</td>
                          <td><button onClick={handleResponse}>Send</button></td>
                        </tr>
                    ))}
                </td>
            </tbody>
          </table>
          )}
          <div>
                      <button onClick={handleSubmit}>Submit Test</button>
          </div>
      </div>
        
    </div>
);
}/* <input type="text" 
            className="form-control"
            placeholder="Enter your answer"
            onChange={handleOptionChosen} /><button onClick={handleResponse}>send </button>*/

 /*  <div>
                      <table >
                          <thead >
                              <th>Enter the Question Id</th>
                              <th>Answer Chosen</th>
                          </thead>
                          <tbody>
                              <td>
                                  <input type="number" placeholder={qid}/>
                                
                              </td>
                              <td>
                                  <input type="text" placeholder={optionChosen} onChange/>
                              </td>
                          </tbody>
                      </table>
          </div>*/           