import React from 'react';
import { Container } from 'react-bootstrap';

function Front() {
  return (
    <Container className="bg-primary text-white py-5">
      <h1 className="text-center">Employee App</h1>
      <div className="mt-5">
        <h2>Welcome to the Employee Page!</h2>
        <p>
          This page is dedicated to managing employee information within the Employee App. Here, you can perform various tasks such as adding new employees, editing existing employee details, and viewing employee records.
        </p>
        <p>
          To get started, navigate to the respective sections using the navigation bar or buttons provided. You'll find options to add employees, view employee lists, search for specific employees, and more.
        </p>
        <p>
          Feel free to explore the app and make use of its features to efficiently manage your organization's employee records.
        </p>
      </div>
    </Container>
  );
}

export default Front;
