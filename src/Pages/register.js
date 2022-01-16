import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

function Register() {
    return (
        <main>
         
         <Form>
                    <Form.Group className="mb-3" controlId="cgpa">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="number" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="t_skills">
                        <Form.Label>College Name </Form.Label>
                        <Form.Control type="text" placeholder="Enter College Name"  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="t_skills">
                        <Form.Label>CGPA </Form.Label>
                        <Form.Control type="text" placeholder="Enter CGPA" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="t_skills">
                        <Form.Label>Passing Year </Form.Label>
                        <Form.Control type="text" placeholder="Enter Passing year"  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="t_skills">
                        <Form.Label>Technical skills </Form.Label>
                        <Form.Control type="text" placeholder="Enter technical skills" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="t_skills">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="text" placeholder="Enter email id" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
        </main>
    )
}

export default Register
