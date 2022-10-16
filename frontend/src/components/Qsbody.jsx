import React from "react";

import Card from "react-bootstrap/Card";
import styled from "styled-components";
import jms from "../img/jose.jpg";
import cris from "../img/cristian.jpg";
import matu from "../img/matu.jpg";

const Qsbody = () => {
  return (
    <QS>
      <div className="div1">
        <div className="div2">
          <Card style={{ width: "18rem", height: "22rem" }}>
            <Card.Img variant="top" src={jms} />
            <Card.Body>
              <Card.Title>jose marcelo salas </Card.Title>
              <Card.Text>Programador FullSTack en preceso</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="div2">
          <Card style={{ width: "18rem", height: "22rem" }}>
            <Card.Img variant="top" src={matu} />
            <Card.Body>
              <Card.Title>Pablo Matias Sanchez</Card.Title>
              <Card.Text>Programador FullSTack en preceso</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="div2">
          <Card style={{ width: "18rem", height: "22rem" }}>
            <Card.Img variant="top" src={cris} />
            <Card.Body>
              <Card.Title>Cristian Adrian Solohaga </Card.Title>
              <Card.Text>Programador FullSTack en preceso</Card.Text>
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
