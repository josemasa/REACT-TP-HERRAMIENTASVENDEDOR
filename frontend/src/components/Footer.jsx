import React from "react";
import styled from "styled-components";
import logo from "../../img/sale-tag-neon-signboard-vector.jpg";
function Footer() {
  return (
    <>
      <FOOTER>
        <div className="conteinerfooter">
          <div>
            <h1>Curso Fullstack </h1>
            <ul>
              <li>José Marcelo Salas </li>

              <li>Pablo Matias Sanchez</li>

              <li>Cristian Adrian Solohaga </li>
            </ul>
          </div>
          <div>
            <img src={logo} alt="" />
          </div>
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
  .conteinerfooter {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  img {
    width: 150px;
    margin-right: 6rem;
  }
`;
