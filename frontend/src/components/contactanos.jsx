import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
const Contactanos = () => {
  return (
    <CONTEINER>
      <div className="CONTEINER">
        <Form>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
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
    </CONTEINER>
  );
};

export default Contactanos;

const CONTEINER = styled.div`
  display: flex;
  .CONTEINER {
    border: 2px solid #0b0b0b;
    border-radius: 20%;
    padding: 20px;
    background-color: aqua;
  }
`;
