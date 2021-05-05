import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect,React} from "react";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getQuestion } from "./usersSlice";
export function GetQuestion() {
  const dispatch = useDispatch();
  const [subject_id, setSubject_id] = useState("");
  const { loading } = useSelector((state) => state.users);
  const { entities } = useSelector((state) => state.users);
  const handleSubjectId = (event) => setSubject_id(event.target.value);

  useEffect (() => {
    dispatch(getQuestion(subject_id));
  }, [subject_id]);
console.log(entities)
return (
    <div className="container">
      <div className="row">
        <h1>Get Questions</h1>
      </div>
      <div className="form-group">
          <label>Subject Id</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter the subject id"
            onChange={handleSubjectId}
          />
        </div>
      <div className="row">
        {loading ? (
          "Loading..."
        ) : (
          <table className="u-full-width" >
        <thead>
            <td>
            <tr className="column">
                <th>Question Id</th>
                <th>Question Name</th>
                <th>Option 1</th>
                <th>Option 2</th>
                <th>Option 3</th>
                <th>Option 4</th>
                <th>Level</th>
                <th>Marks</th>
            </tr>
            </td>
        </thead>
            <tbody>
                <td>
                    {entities && entities.map(({questionId,questionName,option1,option2,option3,option4,level,marks},i)=>(
                      
                        <tr className="row" key={i}>
                            <td>{questionId}</td>
                            <td>{questionName}</td>
                            <td>{option1}</td>
                            <td>{option2}</td>
                            <td>{option3}</td>
                            <td>{option4}</td>
                            <td>{level}</td>
                            <td>{marks}</td>
                        </tr>
                    ))}
                </td>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}