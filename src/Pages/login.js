import React from 'react'
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function Login() {
  return (
    <main>

      <Container className="mt-5">
        <Row>
          <Col lg={4} md={6} sn={12} className="p-3 mt-4 hal">
            <h3 className="user">User Login </h3>
            <Form method="POST">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email"
                  placeholder="Enter email"
                  required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" placeholder="Password"
                  required />
              </Form.Group>

              <div className=" gap-1">
                <Button id='but1' variant="primary" type="submit">Login as Company</Button> &nbsp;
                <Button variant="primary " type="submit">Login as Student</Button>
              </div>

              <div className="text-left mt-3">
                New user student<a href="/Signup"><small className="reset ml-2"></small> register</a>
              </div>
              <div className="text-left mt-3">
                New user company<a href="/signup2"><small className="reset ml-2"></small> register2</a>
              </div>
            </Form>
          </Col>

        </Row>
      </Container>
    </main>
  )
}

export default Login
