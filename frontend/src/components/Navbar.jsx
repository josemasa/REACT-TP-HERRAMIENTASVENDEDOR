import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";
import logo from "../img/logo.png";
function BasicExample() {
  return (
    <NAVBAR>
      <Navbar bg="info" expand="lg">
        <Container>
          <Nav>
            <Navbar.Brand href="#home">
              <img src={logo} alt="" />{" "}
            </Navbar.Brand>
          </Nav>

          <Nav>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <Link
                    to={"/"}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    INICIO
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to={"/qs"}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    QUINES SOMOS
                  </Link>
                </Nav.Link>
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
    width: 150px;
  }
`;
