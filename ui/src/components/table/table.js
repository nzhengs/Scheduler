import React from "react";
import Table from "react-bootstrap/Table";
import "../table/style.css"
import Container from "react-bootstrap/Container";

function TableList() {
    return (
        <Container>
        <Table striped bordered hover className="form-font">
            <thead>
            <tr>
                <th>id</th>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>phone</th>
                <th> Address1</th>
                <th>Address2</th>
                <th>City</th>
                <th>State</th>
                <th>Zip</th>

            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>dev</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

            </tr>

            </tbody>
        </Table>
        </Container>
    )

}
export default TableList;