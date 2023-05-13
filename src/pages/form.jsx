import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function EmployeeForm() {
  return (
    <Container className="bg-secondary-subtle p-3">
      <Form>
        <Form.Group>
          <Form.Label>Field Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Field Name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Designation</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Designation" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Location" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Salary</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Salary" />
        </Form.Group>
        <Form.Group>
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default EmployeeForm;
