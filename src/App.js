import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./styles/style.scss";
import NavBar from "./components/NavBar";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import DashBoard from "./pages/DashBoard";
import StudentContext from "./context/StudentContext";
import ProfileData from "./pages/ProfileData";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

function App() {
  const [currentAdmin, setAdmin] = useState({});
  const [currentStudentCredential, setCredential] = useState({});
  const [loginValidation, setLoginValidation] = useState("form-control");
  const [student, setStudent] = useState({});

  const onCreateAdmin = (newAdmin) => {
    setAdmin(newAdmin);
    console.log("newAdmin", newAdmin);
  };

  // selfnote:  [currentStudentCredential, setCredential]  should be updated to [currentStudent, setStudent] after implemented with backend and enable to fetch data by get_student_by_email()
  // server validation: if the response status is 200, it should set loginValidation to is-valid, otherwise it should be is-invalid
  const onLogin = (userCredential) => {
    setCredential(userCredential);
    console.log("userCredential", userCredential);
    // if server returned 200 status:
    setLoginValidation("form-control is-valid");
  };

  return (
    <StudentContext.Provider value={{ student, setStudent }}>
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route
              path="/admin/log_in"
              component={() => (
                <Login onLogin={onLogin} loginValidation={loginValidation} />
              )}
            />
            <Route
              path="/admin/signup"
              component={() => <SignUp onCreateAdmin={onCreateAdmin} />}
            />
            <Route path="/admin/add_student" component={AddStudent} />
            <Route path="/admin/edit_student" component={EditStudent} />
            <Route path="/dashboard" component={DashBoard} />
            <Route path="/students" component={ProfileData} />
          </Switch>
        </Router>
      </div>
    </StudentContext.Provider>
  );
}

export default App;
