import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./styles/style.scss";
import NavBar from "./components/NavBar";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import DashBoard from "./pages/DashBoard";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

function App() {
  const onCreateAdmin = (newAdmin) => {
    console.log("newAdmin", newAdmin);
  };
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/admin/log_in" component={Login} />
          <Route
            path="/admin/signup"
            component={() => <SignUp onCreateAdmin={onCreateAdmin} />}
          />
          <Route path="/admin/add_student" component={AddStudent} />
          <Route path="/admin/edit_student" component={EditStudent} />
          <Route path="/dashboard" component={DashBoard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
