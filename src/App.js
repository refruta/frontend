import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddUser } from "./features/users/AddUser";
import { EditUser } from "./features/users/EditUser";
import React from "react";
import { UserList } from "./features/users/UserList";
import { home, HomePage } from "./features/users/HomePage";
import { AdminLogin } from "./features/users/AdminLogin";
import { AdminPage } from "./features/users/AdminPage";
import { AddSubject } from "./features/users/AddSubject";
import { GetSubject } from "./features/users/GetSubject";
import { AddQuestion } from "./features/users/AddQuestion";
import { GetQuestion } from "./features/users/GetQuestion";
import { DeleteQuestion } from "./features/users/DeleteQuestion";
import { UserPage } from "./features/users/UserPage";
import { CreateTest } from "./features/users/CreateTest";
import { GetTest } from "./features/users/GetTest";
import { CreateReport } from "./features/users/CreateReport";
import { GetReport } from "./features/users/GetReport";
import { GetAllReport } from "./features/users/GetAllReport";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/add-user">
            <AddUser />
          </Route>
          <Route path="/edit-user">
            <EditUser />
          </Route>
          <Route path="/adminlogin">
            <AdminLogin />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/adminpage">
            <AdminPage />
          </Route>
          <Route path="/addsubject">
            <AddSubject />
          </Route>
          <Route path="/getsubject">
            <GetSubject />
          </Route>
          <Route path="/addQuestion">
            <AddQuestion />
          </Route>
          <Route path="/getQuestion">
            <GetQuestion />
          </Route>
          <Route path="/deleteQuestion">
            <DeleteQuestion />
          </Route>
          <Route path="/userPage">
            <UserPage />
          </Route>
          <Route path="/createTest">
            <CreateTest />
          </Route>
          <Route path="/getTest">
            <GetTest />
          </Route>
          <Route path="/submit">
            <UserList />
          </Route>
          <Route path="/create-report">
            <CreateReport />
          </Route>
          <Route path="/getreport">
            <GetReport />
          </Route>
          <Route path="/getAllReport">
            <GetAllReport />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
