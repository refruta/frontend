import { useSelector,useDispatch } from "react-redux";
import {useEffect,React} from "react";
import { getAllReport } from "./usersSlice";
export function GetAllReport (){
    const { entities , loading } = useSelector((state) => state.users);

    const dispatch = useDispatch();
useEffect (() => {
        dispatch(getAllReport());
      }, []);
   return(
        <div className="container">
   <div className="row">
     <h1>Get Reports</h1>
   </div>
   <div className="row">
     {loading ? (
       "Loading..."
     ) : (
       <table className="u-full-width" >
     <thead>
         <tr className="row">
             <th>Report Id</th>
             <th>Cleared Level</th>
             <th>Marks Obtained</th>
             <th>Marks Total</th>
         </tr>
     </thead>
         <tbody>
                  {entities && entities.map(({reportId,clearedLevel,testScore,totalScore},i)=>(
                    <tr className="row" key={i}>
                        <td>{reportId}</td>
                        <td>{clearedLevel}</td>
                        <td>{testScore}</td>
                        <td>{totalScore}</td>
                    </tr>
                ))}
         </tbody>
       </table>
     )}
   </div>
 </div>
    )
}