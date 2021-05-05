import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import {useDispatch ,useSelector} from 'react-redux';
import {createReport} from './usersSlice'
export function CreateReport() {
    const dispatch = useDispatch();
//  const history = useHistory();
  const [error, setError] = useState(null);
  const { errorMessage,successMessage ,isError} = useSelector((state) => state.users);
  const [userId, setUserId] = useState("");
  const [testId, setTestId] = useState("");
  const [totalMarks, setTotalMarks] = useState("");

  const handleUserId = (event) => setUserId(event.target.value);
  const handleTestId = (event) => setTestId(event.target.value);
  const handleTotalMarks = (event) => setTotalMarks(event.target.value);
 
  const handleClick = () => {
    if (testId && userId && totalMarks) {
      //   history.push("/userlist");
      dispatch(
        createReport({
            testId,userId,totalMarks
        })
      );
      
      }else{
        setError("Fill in all fields");
      }
    };

    return(<div>
            <form>
              <div className="col-md-6 container">
                <h3 className="text-center">Create Report</h3>
                <div className="form-group">
                  <label>Enter User Id</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter User Id"
                    onChange={handleUserId}
                  />
                </div>
                <div className="form-group">
                  <label>Test Id</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Test Id"
                      onChange={handleTestId}
                  />
                </div>
                <div className="form-group">
                  <label>Total Marks</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Total Marks"
                    onChange={handleTotalMarks}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={handleClick}
                >
                  Create Report
                </button>
                <h1>{successMessage}</h1>
                <h1>{errorMessage}</h1>
                {isError || error != "" ? (
          <h6 >{errorMessage} {error}</h6> 
        ) : (
          <></>
        )}
                <h1>{error}</h1>

              </div>
            </form>

    </div>)
}
 