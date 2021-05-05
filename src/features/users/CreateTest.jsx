import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { createTest } from "./usersSlice";
import 'bootstrap/dist/css/bootstrap.min.css';
export function CreateTest() {
    const dispatch = useDispatch();
    const [userId, setUserId] = useState("");
    const [subject_id, setSubjectId] = useState("");
    const [level, setLevel] = useState("");
    
    const { errorMessage,successMessage , loading } = useSelector((state) => state.users);

    const handleUserId = (event) => setUserId(event.target.value);
    const handleSubjectId = (event) => setSubjectId(event.target.value);
    const handleLevel = (event) => setLevel(event.target.value);
    
   const handleClick = () => {
   
       try{
           dispatch(createTest({userId,subject_id,level})) 
         //history.push("/adminpage");
         }catch(Exception){
         alert('error')
       }
   };

    return(<div className="container">
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
  

      <div>
          <button onClick={handleClick} >
                  Submit
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
            </div> )
}