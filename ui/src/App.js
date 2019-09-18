import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from "./pages/Homepage/Homepage.js";
import AddEmployees from "./pages/AddEmployees/AddEmployees";
import Employees from "./pages/Employees/Employees"

function App() {

    return (
        <Router>
            <switch>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/employees/add" component={AddEmployees}/>
                <Route exact path="/employees" component={Employees}/>
            </switch>
        </Router>
    )

}

export default App;
