import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getReport } from "./usersSlice";
export function GetReport() {

    const dispatch = useDispatch();
    const [error , setError ] = useState("")
    const [reportId, setReportId] = useState("");
    const { isError,errorMessage,loading } = useSelector((state) => state.users);
    const { entity } = useSelector((state) => state.users);
    const handleReportId = (event) => setReportId(event.target.value);
    const handleClick = () => {
        if (reportId != null) {
          dispatch(
            getReport(reportId)
          );
        //   history.push("/userlist");
        }else{
          setError("Fill in all fields");
        }
      };
return( <div className="container">
    <div className="row">
      <h1>Get Report By Id</h1>
    </div>
    <div className="form-group">
        <label>Report Id</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter the report id"
          onChange={handleReportId}
        />
      </div>
     <div className="form-group">
            <button onClick={handleClick}>
                    Get Report
            </button>
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
              <th>Student Name</th>
              <th>Student Email</th>
              <th>Test Date</th>
              <th>Cleared Level</th>
              <th>Subject Name</th>
              <th>Marks Obtained</th>
              <th>Total Marks</th>
            </tr>
      </thead>
          <tbody>
              <tr>

              <td>
                  {
                      entity && entity['name']
                  }
              </td>
              <td>
                  {
                      entity && entity['email']
                  }
              </td>
              <td>
                  {
                      entity && entity['dateAndTimeOfTest']
                  }
              </td>
              <td>
                  {
                      entity && entity['level']
                  }
              </td>
              <td>
                  {
                      entity && entity['subjecName']
                  }
              </td>
              <td>
                  {
                      entity && entity['testScore']
                  }
              </td>
              <td>
                  {
                      entity && entity['totalScore']
                  }
              </td>
              </tr>

          </tbody>
        </table>
      )}
    </div>
  </div>)
}