import React from "react";
import Footer from "../components/Footer";
import Cont from "../components/contactanos";
import Navbar from "../components/Navbar";
function cont() {
  return (
    <>
      <div className="root">
        <Navbar />
        <Cont />
        <Footer />
      </div>
    </>
  );
}

export default cont;
