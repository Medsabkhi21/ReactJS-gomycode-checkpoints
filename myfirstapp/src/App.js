import React from 'react';
import './App.css';
import {Form,Button, Navbar, Container, Nav} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <div>
  <Navbar bg="primary"  variant="light" >
  <Container>
    <Navbar.Brand href="#home">0.Facebook</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#signup">SignUp</Nav.Link>
    </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll prbably sell your data to third parties.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
      )
}

export default App;