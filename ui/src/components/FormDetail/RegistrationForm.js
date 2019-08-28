import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./RegistrationForm.css"

function FormDetail() {
    const defaultEmployee = {
        firstName: "",
        middleName: "",
        lastName: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        gender: "",
        phone: ""
    };

    const [employee, setEmployee] = useState(defaultEmployee);

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        setEmployee(prevEmployee => {
            const newEmployee = {
                ...prevEmployee,
                [name]: value
            };
            return newEmployee;
        })
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(employee);
        const url = "http://localhost:8080/employees";
        fetch(url, {
            method: "POST",
            body: JSON.stringify(employee),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
    };

    const genders = [
        {
            value: "M",
            label: "Male"
        },
        {
            value: "F",
            label: "Female"
        },
        {
            value: "O",
            label: "Other"
        }
    ];

    return (
        <Container className="employee-form">
            <h3 className="text-center p-4">Employees registration form</h3>
            <hr/>
            <Form onSubmit={onFormSubmit}>
                <Form.Row className="p-2">
                    <Form.Group as={Col} controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text"
                                      placeholder="Enter First Name"
                                      name="firstName"
                                      value={employee.firstName}
                                      onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="middleName">
                        <Form.Label>Middle Name</Form.Label>
                        <Form.Control type="text"
                                      placeholder="Enter Middle Name"
                                      name="middleName"
                                      value={employee.middleName}
                                      onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text"
                                      placeholder="Enter Last Name"
                                      name="lastName"
                                      value={employee.lastName}
                                      onChange={handleChange}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row className="p-2">
                    <Form.Group as={Col} controlId="gender">
                        <Form.Label>Gender</Form.Label>
                        {
                            genders
                                .map(gender => (
                                    <Form.Check
                                        type="radio"
                                        label={gender.label}
                                        name="gender"
                                        value={gender.value}
                                        onChange={handleChange}
                                    />
                                ))
                        }
                    </Form.Group>

                    <Form.Group as={Col} controlId="phone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text"
                                      placeholder="999-999-9999"
                                      name="phone"
                                      value={employee.phone}
                                      onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="address1">
                        <Form.Label>Address1</Form.Label>
                        <Form.Control type="text"
                                      placeholder="1234 Main St"
                                      name="address1"
                                      value={employee.address1}
                                      onChange={handleChange}

                        />
                    </Form.Group>


                </Form.Row>

                <Form.Row className="p-2">
                    <Form.Group as={Col} controlId="address2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control type="text" placeholder="Apartment, studio, or floor"
                                      name="address2"
                                      value={employee.address2}
                                      onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            name="city"
                            value={employee.city}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="state">
                        <Form.Label>State</Form.Label>
                        <Form.Control
                            type="text"
                            name="state"
                            value={employee.state}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="zip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control
                            type="text"
                            name="zip"
                            value={employee.zip}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Form.Row>


                <Button variant="secondary" type="submit" className={"float-right"}>
                    Submit
                </Button>
            </Form>
        </Container>
    );

}

export default FormDetail;