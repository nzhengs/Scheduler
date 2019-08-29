import React from "react";
import Navbar from "../../components/navbar/Navbar";
import RegistrationForm from "../../components/FormDetail/RegistrationForm";
import Jumbotron from "react-bootstrap/Jumbotron";
import Footer from "../../components/Footer/Footer";

function AddEmployees() {
    return(
        <div>
            <Navbar/>
            <Jumbotron>
            <RegistrationForm/>
            </Jumbotron>
            <Footer/>
        </div>
    )
}
export default AddEmployees;