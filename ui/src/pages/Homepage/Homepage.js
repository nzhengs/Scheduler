import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Homepage.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAddressBook, faCalendarAlt} from "@fortawesome/free-solid-svg-icons";
import {faCalculator} from "@fortawesome/free-solid-svg-icons/faCalculator";
import Footer from "../../components/Footer/Footer";
import AddEmployees from "../AddEmployees/AddEmployees";
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div>
            <Navbar></Navbar>
            <Jumbotron className="description">
                <Row>
                    <Col/>
                    <Col> <Card.Header className="welcome-header border-0">Welcome to the Scheduler</Card.Header></Col>
                    <Col/>
                </Row>
                <Row>
                    <Col className="text-center">
                        <Card className="functionality-description border-0">
                            <Link to="/employees/add" >
                            <FontAwesomeIcon icon={faAddressBook} size="6x"/>
                            </Link>
                            <Card.Body>
                                <Card.Title>Record Employee</Card.Title>
                                <Card.Text>
                                    Record the information about your Employees
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col/>
                    <Col className="text-center">
                        <Card className="functionality-description border-0">
                            <FontAwesomeIcon icon={faCalendarAlt} size="6x"/>
                            <Card.Body>
                                <Card.Title>Manage Schedule</Card.Title>
                                <Card.Text>
                                    Manage shifts and schedules of your Employees
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col/>
                    <Col className="text-center">
                        <Card className="functionality-description border-0">

                            <FontAwesomeIcon icon={faCalculator} size="6x" color="##295a81"/>

                            <Card.Body>
                                <Card.Title>Calculate Salary</Card.Title>
                                <Card.Text>
                                    Calculate payroll for your Employees
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col/>
                </Row>
            </Jumbotron>
            <Footer/>
        </div>

    )

}

export default HomePage;