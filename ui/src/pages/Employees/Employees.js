import React from "react";
import Navbar from "../../components/navbar/Navbar";
import EmployeeList from "../../components/EmployeeList/EmployeeList";
import Footer from "../../components/Footer/Footer";
import {Jumbotron} from "react-bootstrap";

function Employees() {
   return(
       <div>
           <Navbar/>
           <Jumbotron>
           <EmployeeList/>
           </Jumbotron>
           <Footer/>
       </div>
   )
}

export default Employees;