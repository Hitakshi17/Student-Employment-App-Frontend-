import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <main>

            <h1>Student Sign-Up</h1>
            <Form>
                <Form.Group className="mb-3" controlId="cgpa">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="number" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="t_skills">
                    <Form.Label>College Name </Form.Label>
                    <Form.Control type="text" placeholder="Enter College Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="t_skills">
                    <Form.Label>CGPA </Form.Label>
                    <Form.Control type="text" placeholder="Enter CGPA" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="t_skills">
                    <Form.Label>Passing Year </Form.Label>
                    <Form.Control type="text" placeholder="Enter Passing year" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="t_skills">
                    <Form.Label>Technical skills </Form.Label>
                    <Form.Control type="text" placeholder="Enter technical skills" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="t_skills">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="text" placeholder="Enter email id" />
                </Form.Group>
                <Link to="/student">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Link>
            </Form>
        </main>
    )
}

export default Register
