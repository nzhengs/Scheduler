import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function FormDetail() {
    return (
        <Container className="employee-form">
            <h3>Employees registration form</h3>
            <hr/>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="firstname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder="Enter First Name"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="middleName">
                        <Form.Label>Middle Name</Form.Label>
                        <Form.Control placeholder="Enter Middle Name"/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="middleName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder="Enter Last Name"/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="gender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control placeholder="M/F"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="phone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control placeholder="999-999-9999"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="address1">
                        <Form.Label>Address1</Form.Label>
                        <Form.Control placeholder="1234 Main St"/>
                    </Form.Group>


                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="address2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor"/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="state">
                        <Form.Label>State</Form.Label>
                        <Form.Control/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control/>
                    </Form.Group>
                </Form.Row>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );

}

export default FormDetail;