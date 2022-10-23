import React from "react";
import Footer from "../components/Footer";
import Contactanos from "../components/Contactanos/Contactanos";
import Navbar from "../components/Navbar";
import styled from "styled-components";

function qs() {
  return (
    <>
      <div className="root">
        <Navbar />
        <Mave>
        <Contactanos />
        </Mave>
        <Footer />
      </div>
    </>
  );
}

export default qs;

// Styles
const Mave = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`;

