import React, { useState } from 'react';
import styles from '../css/contact.module.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    address2: ''
  });

  const [errorFormData, setErrorFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    address2: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const clickHandle = (e) => {
    e.preventDefault();

    let hasErrors = false;
    const errorData = {};

    
    for (const field in formData) {
      if (formData[field] === '') {
        errorData[field] = 'Please fill out this field';
        hasErrors = true;
      } else {
        errorData[field] = '';
      }
    }

    setErrorFormData({ ...errorFormData, ...errorData });

    if (!hasErrors) {
      let outtxt = document.getElementById('outtxt');
      let text = document.getElementById('text');
      outtxt.style.display = 'block';
      text.style.display = 'block';
    }
  };

  return (
    <div className={styles.body}>
      <h1 className={styles.heading1}>CONTACT</h1>

      <Form className="pt-5 mt-5" onSubmit={clickHandle}>
        <Row>
          <Col>
            <Form.Control
              placeholder="First name"
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
            />
            {errorFormData.firstname && <p className={styles.error}>{errorFormData.firstname}</p>}
          </Col>
          <Col>
            <Form.Control
              placeholder="Last name"
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
            {errorFormData.lastname && <p className={styles.error}>{errorFormData.lastname}</p>}
          </Col>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errorFormData.email && <p className={styles.error}>{errorFormData.email}</p>}
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="1234 Main St"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errorFormData.address && <p className={styles.error}>{errorFormData.address}</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control
            placeholder="Apartment, studio, or floor"
            type="text"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
          />
          {errorFormData.address2 && <p className={styles.error}>{errorFormData.address2}</p>}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <p className={styles.outtxt} id="outtxt">
          YOUR GIVEN DETAILS
        </p>
        <div className={styles.text} id="text">
          {formData.firstname} {formData.lastname}
          <br />
          {formData.email}
          <br />
          {formData.address}
          <br />
          {formData.address2}
        </div>
      </Form>
    </div>
  );
};

export default Contact;
