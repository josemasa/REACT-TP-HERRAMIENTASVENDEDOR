import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <>
      <FOOTER>
        <div>
          <h1>Curso fullstack </h1>
          <ul>
            <li>jose marcelo salas </li>
            <br />
            <li>Pablo Matias Sanchez</li>
            <br />
            <li>Cristian Adrian Solohaga </li>
          </ul>
        </div>
        <small>
          &copy; 2022 <b>Chespy - Programador Full Stack</b> - Todos los
          Derechos Reservados.
        </small>
      </FOOTER>
    </>
  );
}

export default Footer;

const FOOTER = styled.div`
  text-align: center;
  div {
    margin-top: 20px;
    padding: 10px;

    background-color: #0dcaf0;
  }
  small {
    font-size: 15px;
  }
`;
