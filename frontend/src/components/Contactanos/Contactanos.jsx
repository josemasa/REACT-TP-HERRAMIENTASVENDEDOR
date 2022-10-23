import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c5g90oa",
        "template_tj8ifld",
        form.current,
        "Gsya2TqHB98jqU3CG"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          alert("Mensaje enviado con éxito");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("No se pudo eviar el mensaje");
        }
      );
  };

  return (
    <>
    <StyledContactForm>
          <form ref={form} onSubmit={sendEmail}>
              <label>Nombre</label>
              <input type="text" name="to_name" />
              <label>Email</label>
              <input type="email" name="from_name" />
              <label>Ingrese un mensaje</label>
              <textarea name="message" />
              <input type="submit" value="Enviar" />
          </form>
      </StyledContactForm>
      </>
      
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      background-color: #0a8bc5;
      color: white;
      border: none;
    }

    input[type="submit"]:hover {
        background-color: #27abb2;
        color: white;
        opacity: 1;
      }
  }
`;