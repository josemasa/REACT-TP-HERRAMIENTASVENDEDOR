import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import jms from "../../img/jose.jpg";
import cris from "../../img/cristian.jpeg";
import matu from "../../img/matu.jpg";

const Qsbody = () => {
  return (
    <QS>
      <div className="div1">
        <div className="div2">
          <Card style={{ width: "18rem", height: "22rem" }}>
            <Card.Img variant="top" src={jms} />
            <Card.Body>
              <Card.Title>José Marcelo Salas </Card.Title>
              <Card.Text>Programador FullSTack en proceso</Card.Text>
            </Card.Body>
          </Card>
        </div>

      </div>
    </QS>
  );
};

export default Qsbody;

const QS = styled.div`
  .div1 {
    border: black solid 2px;
    border-radius: 15px;
    padding: 15px;
    margin-left: 15px;
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: #0dcaf0;
  }
  .div2 {
    border: black solid 2px;
    border-radius: 15px;
    margin-top: 5px;
    background-color: #0dcaf0;
    margin-left: 15px;
  }
  .div2 :hover {
    opacity: 0.9;
    transform: scale(1.02);
  }
`;
