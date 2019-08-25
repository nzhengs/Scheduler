import React , {Component} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/navbar/nav"
import EmployeeList from "./components/table/EmployeeList"
import Container from "react-bootstrap/Container";
import FormDetail from "./components/FormDetail/form.js"


function App() {
    return <div className="App">
        <Nav/>
        <br/>

        <EmployeeList/>
        <FormDetail/>


    </div>
}

export default App;
