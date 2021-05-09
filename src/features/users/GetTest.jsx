import {Link} from 'react-router-dom';
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
  
  const [error, setError] = useState("");
  const [level, setLevel] = useState("");
  const { loading ,isSuccess,isError,errorMessage} = useSelector((state) => state.users);
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
    if(testId && level ){

      try{
        dispatch(getQuestions({testId,level})) 
        //history.push("/adminpage");
      }catch(Exception){
        alert('error')
      }
      setError('');
    }else{
      setError('Fill in all fields')
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
    <div >
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/userPage">
  <a class="navbar-brand" >Student Panel</a>
  </Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Take Test<span class="sr-only">(current)</span></a>
      <Link to="/getAllReport">
            <p class="nav-item nav-link" >Get Reports</p>
      </Link>
      <a class="nav-item nav-link" href="/login">Logout</a>
    </div>
  </div>
</nav>
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
        <div>
       {isError || errorMessage != null ? (
          <h6 >{errorMessage} {error}</h6> 
        ) : (
          <> </>
        )}
       
       </div> 
      <div class="container">
        {!isSuccess ? (
          ''
          ) : (
            <table class="table-hover">
        <thead>
            <tr>
                <th>Question Id</th>
                <th>Question Name</th>
                <th>Option 1</th>
                <th>Option 2</th>
                <th>Option 3</th>
                <th>Option 4</th>
                <th>Level</th>
                <th>Marks</th>
                <th>Send</th>
            </tr>
        </thead>
            <tbody>
                    {entities && entities.map(({questionId,questionName,option1,option2,option3,option4,level,marks},i)=>(
                      <tr  key={i}>
                            <td><button onClick={handleQuestionId} value={questionId}>{questionId}</button>
                            </td>
                            <td class="blockquote">{questionName}</td>
                            <td><button onClick={handleOptionChosen} value={option1}>{option1}</button>
                            </td><td><button onClick={handleOptionChosen} value={option2}>{option2}</button>
                            </td><td><button onClick={handleOptionChosen} value={option3}>{option3}</button>
                            </td><td><button onClick={handleOptionChosen} value={option4}>{option4}</button>
                            </td><td>{level}</td>
                            <td>{marks}</td>
                          <td><button onClick={handleResponse}>Send</button></td>
                        </tr>
                    ))}
            </tbody>
            <div>
                      <button onClick={handleSubmit}>Submit Test</button>
          </div>
          </table>
          )}

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