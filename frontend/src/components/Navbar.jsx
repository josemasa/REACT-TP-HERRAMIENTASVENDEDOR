import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";
import comers from "../../img/comers.png";
function BasicExample() {
  return (
    <NAVBAR>
      <Navbar bg="info" expand="lg">
        <Container>
          <Nav>
            <Navbar.Brand href="/home">
              <div className="funciones4">
                <div>
                  <img src={comers} alt="" />{" "}
                </div>
              </div>
            </Navbar.Brand>
          </Nav>

          <Nav>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav className="funciones">
                  <Nav className="funciones3">
                    <h1>FUNCIONES</h1>
                  </Nav>
                  <Nav>
                    <Nav.Link className="funciones2">
                      <Link
                        to={"/recordatorios"}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        RECORDATORIOS
                      </Link>
                    </Nav.Link>
                    <Nav.Link className="funciones2">
                      <Link
                        to={"/productos"}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        PRODUCTOS
                      </Link>
                    </Nav.Link>
                    <Nav.Link className="funciones2">
                      <Link
                        to={"/contactos"}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        CONTACTOS
                      </Link>
                    </Nav.Link>
                  </Nav>
                </Nav>
                <Nav className="funciones3">
                  <Nav.Link className="funciones1">
                    <Link
                      to={"/qs"}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      QUIENES SOMOS
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="funciones1">
                    <Link
                      to={"/contactanos"}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      CONTACTANOS
                    </Link>
                  </Nav.Link>
                </Nav>
              </Nav>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </NAVBAR>
  );
}

export default BasicExample;

const NAVBAR = styled.div`
  div {
    text-align: center;
  }
  img {
    width: 120px;
  }
  .funciones {
    display: flex;
    flex-direction: column;

    .funciones2 {
      border: 2px solid black;
      border-radius: 20px;
      margin: 3px;
      background-color: #0a8bc5;
      padding: 25px;
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  }
  .funciones1 {
    border: 2px solid black;
    border-radius: 20px;
    margin: 6px 6px 6px 6px;

    background-color: #0a8bc5;
    padding: 25px;
    font-size: 20px;
    display: flex;
    align-items: center;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .funciones3 {
    border: 2px solid black;
    border-radius: 20px;
    margin: 6px 6px 6px 6px;
    background-color: #0a8bc5;
    padding: 5px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .funciones1:hover {
    background-color: #27abb2;
    color: white;
    opacity: 1;
  }
  .funciones2:hover {
    background-color: #27abb2;
    color: white;
    opacity: 1;
  }
  h1 {
    margin: 0% 0% 0% 10%;
  }
  .funciones4 {
    border: 2px solid black;
    border-radius: 20px;

    background-color: #0a8bc5;
    padding: 5px;
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
