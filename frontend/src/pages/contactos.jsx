import React from "react";
import Root from "../components/AgendaContactos/root";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <>
      <div className="root">
        <Navbar />

        <Root />

        <Footer />
      </div>
    </>
  );
}

export default HomePage;
