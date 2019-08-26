import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar"
import EmployeeList from "./components/EmployeeList/EmployeeList"
import Container from "react-bootstrap/Container";
import FormDetail from "./components/FormDetail/form.js"
import Homepage from "./pages/Homepage/Homepage.js";


function App() {


        return (
            <Router>
                <switch>
                    <Route exact path="/" component={Homepage}/>
                </switch>
            </Router>
        )

}

export default App;
