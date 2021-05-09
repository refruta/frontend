import {Link } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import {useEffect,React, useState} from "react";
import { getAllReport, getReport } from "./usersSlice";
export function GetAllReport (){
    const { isSuccess,entity,entities , loading } = useSelector((state) => state.users);
    
    const [repId, setRepId] = useState("");
    const handleRepId = (event) => setRepId(event.target.value);

    const dispatch = useDispatch();
useEffect (() => {
        dispatch(getAllReport());
      }, []);

     /* useEffect (() => {
        dispatch(getReport(repId));
      }, [repId]);
    */
      
const handleGetReport = ()=>{
 dispatch(getReport(repId));  
}
console.log(entity)
   return(
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
      <a class="nav-item nav-link active" href="#">Get Reports<span class="sr-only">(current)</span></a>
      <Link to="/gettest">
            <p class="nav-item nav-link" >Take Test</p>
      </Link>
      <a class="nav-item nav-link" href="/login">Logout</a>
    </div>
  </div>
</nav>
   <div>
     
   <div class="container">
     {loading ? (
       "Loading..."
       ) : (
         <table class="table table-hover table-light table-bordered " >            
    <thead >
        <tr>
             <th className="align-middle">Report Id</th>
             <th className="align-middle">Cleared Level</th>
             <th className="align-middle">Marks Obtained</th>
             <th className="align-middle">Marks Total</th>
             <th className="align-middle">More Details</th>
        </tr>
    </thead>
        <tbody>
                {entities && entities.map(({reportId,clearedLevel,testScore,totalScore},i)=>(
                  <tr key={i}>
                        <tr>{reportId}</tr>
                        <td>{clearedLevel}</td>
                        <td>{testScore}</td>
                        <td>{totalScore}</td>
                        <td><button  onClick={handleRepId} onDoubleClick={handleGetReport} value={reportId}>Details</button>
                        </td>
                    </tr>
                ))}
        </tbody>
      </table>     )}
   </div>
   <div className="container">
      {!isSuccess ? (
        ""
        ) : (
          <table class="table-hover table-light">
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
      </div>
   </div>
    )
}