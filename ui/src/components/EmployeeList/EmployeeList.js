import React, {useState, useEffect} from "react";
import Table from "react-bootstrap/Table";
import "./EmployeeList.css"
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";


function EmployeeList() {


    const [employees, setEmployees] = useState([]);

    useEffect(populateEmployees, []);

    function populateEmployees() {
        const url = "http://localhost:8080/employees";
        fetch(url)
            .then(res => res.json())
            .then(employees => setEmployees(employees));

    }

    return (
        <Container>
            <Card>
                <Card.Header className="text-center">
                    Employees Information Detail
            </Card.Header>
            </Card>
            <Table striped bordered hover className="form-font">
                <thead onClick={populateEmployees}>
                <tr>
                    <th>id</th>
                    <th>First Name</th>
                    <th>Middle Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>phone</th>
                    <th>Address1</th>
                    <th>Address2</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip</th>

                </tr>
                </thead>
                <tbody>
                {
                    employees.map(employee =>
                        <tr>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.middleName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.address1}</td>
                            <td>{employee.address2}</td>
                            <td>{employee.city}</td>
                            <td>{employee.state}</td>
                            <td>{employee.zip}</td>
                        </tr>)

                }


                </tbody>
            </Table>
        </Container>
    )

}

export default EmployeeList;