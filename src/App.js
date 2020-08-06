import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./scss/style.scss";
import NavBar from "./components/NavBar";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/admin/log_in" component={Login} />
          <Route path="/admin/signup" component={SignUp} />
          <Route path="/admin/add_student" component={AddStudent} />
          <Route path="/admin/edit_student" component={EditStudent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
