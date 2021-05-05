import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
export function UserPage(){
return(<div>    
         <div className="row">
           <div className="two columns">  
            <Link to="/gettest">
                <button className="button-primary">Get Test</button>
             </Link>
          </div>
        </div>
        <div className="row">
           <div className="two columns">  
            <Link to="/getReport">
                <button className="button-primary">Get Report</button>
             </Link>
          </div>
        </div>
        <div className="row">
           <div className="two columns">  
            <Link to="/getAllReport">
                <button className="button-primary">Get All Reports </button>
             </Link>
          </div>
        </div>

</div>)
}