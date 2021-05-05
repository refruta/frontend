import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect,React} from "react";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getSubject } from "./usersSlice";
export function GetSubject() {
  const dispatch = useDispatch();
  const [subject_id, setSubject_id] = useState("");
  const { isError,errorMessage,loading } = useSelector((state) => state.users);
  const { entity } = useSelector((state) => state.users);
  const handleSubjectId = (event) => setSubject_id(event.target.value);

  useEffect (() => {
    dispatch(getSubject(subject_id));
  }, [subject_id]);
console.log(entity)

return (
    <div className="container">
      <div className="row">
        <h1>Get Subject By Id</h1>
      </div>
      <div className="form-group">
          <label>Subject Id</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter the subject name"
            onChange={handleSubjectId}
          />
        </div>
       <div>
       {isError || errorMessage != null ? (
          <h6 >{errorMessage} </h6> 
        ) : (
          <> </>
        )}
       
       </div> 
       <div className="row">
        {loading ? (
          "Loading..."
        ) : (
          <table className="u-full-width">
        <thead>
              <tr>
                <th>SubjectId</th>
                <th>Subject Name</th>
                <th>No Of Questions</th>
                <th>Level</th>
                <th>Duration</th>

              </tr>
        </thead>
            <tbody>
                <td>
                    {
                        entity && entity['subject_id']
                    }
                </td>
                
                <td>
                    {
                        entity && entity['subjectName']
                    }
                </td>
                
                <td>
                    {
                        entity && entity['noOfQuestions']
                    }
                </td>
                <td>
                    {
                        entity && entity['level']
                    }
                </td>
                <td>
                    {
                        entity && entity['duration']
                    }
                </td>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
 /* return /*(
    <form>
      <div className="col-md-6 container">
        <h3 className="text-center">Add Subject</h3>
        <div className="form-group">
          <label>Subject Id</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter the subject name"
            onChange={handleSubjectId}
          />
        </div>
          <h6>{error}</h6>
        
        <button
          type="button"
          className="btn btn-primary btn-block"
         //</div> onClick={handleClick}
        
        >
         Get Subject
        </button>
        <table>
            <td>
            {entityById && entityById.tags && 
                entityById.tags.map((subject) => {
                    <div>
                    <span class="badge badge-secondary" key={subject.subjectName}>
                      {subject.subjectName}
                      {subject.noO}
                    </span>
                    </div>
                })
            }
            </td>
            
       </table>
      </div>
    </form>
  );
        */}