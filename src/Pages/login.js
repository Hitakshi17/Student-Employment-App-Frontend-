import React from 'react'
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';

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
                <Link to="/company">
                  <Button id='but1' variant="primary" type="submit">Login as Company</Button> &nbsp;
                </Link>
                <Link to="/student">
                  <Button variant="primary " type="submit">Login as Student</Button>
                </Link>
              </div>

              <div className="text-left mt-3">
                New user student<Link to="/signup"><small className="reset ml-2"></small> Click Here </Link>
              </div>
              <div className="text-left mt-3">
                New user company<Link to="/signup2"><small className="reset ml-2"></small> Click Here </Link>
              </div>
            </Form>
          </Col>

        </Row>
      </Container>
    </main>
  )
}

export default Login
