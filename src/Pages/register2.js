import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

function Register2() {
    return (
        <main>
         
         <Form>
                    <Form.Group className="mb-3" controlId="cgpa">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control type="number" placeholder="Enter Company Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="t_skills">
                        <Form.Label>Company email </Form.Label>
                        <Form.Control type="text" placeholder="Enter Company email"  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="t_skills">
                        <Form.Label>Company mobile number</Form.Label>
                        <Form.Control type="text" placeholder="Enter Company mobile number" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="t_skills">
                        <Form.Label>Job description </Form.Label>
                        <Form.Control type="text" placeholder="Enter Job description"  />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
        </main>
    )
}

export default Register2
