import React from "react";
import Footer from "../components/Footer";
import Qsbody from "../components/Qsbody";
import Navbar from "../components/Navbar";
function qs() {
  return (
    <>
      <div className="root">
        <Navbar />
        <Qsbody />
        <Footer />
      </div>
    </>
  );
}

export default qs;
