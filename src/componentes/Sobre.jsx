import React from "react";
import "../css/Sobre.css";
import "../mediaQuery/Sobre-media-query.css";
import logoDesktops from "../assets/logo-desktops-amarelo.png";
import caiqueImage from "../assets/caique.jpg";
import enricoImage from "../assets/enrico.png";
import gabrielImage from "../assets/gabriel.png";
import guilhermeImage from "../assets/guilherme.jpg";
import silviaImage from "../assets/silvia.png";

function Sobre() {
  return (
    <>
      <div id="container-sobre">
        <div id="content1">
          <div id="top">
            <img src={logoDesktops} alt="Logo Desk{tops}" /> 
            <p>
              DeskTOPS é um grupo dedicado a desenvolver soluções tecnológicas
              que visam proteger e melhorar a qualidade de vida das pessoas, ao
              mesmo tempo em que preservam o meio ambiente. Seu objetivo é
              utilizar a tecnologia para construir um futuro mais seguro e
              sustentável.
            </p>
          </div>
          <h1>Integrantes</h1>
          <div className="integrantes">
            <div className="integrante">
              <img src={caiqueImage} alt="" /> 

              <p>Caíque Walter</p>
            </div>
            <div className="integrante">
              <img src={enricoImage} alt="" /> 

              <p>Enricco Rossi</p>
            </div>
            <div className="integrante">
              <img src={gabrielImage} alt="" /> 

              <p>Gabriel Marquez</p>
            </div>
            <div className="integrante">
              <img src={guilhermeImage} alt="" /> 

              <p>Guilherme Nobre</p>
            </div>
            <div className="integrante">
              <img src={silviaImage} alt="" />

              <p>Silvia Kavabata</p>
            </div>
          </div>
        </div>
        <div id="content2">
          <h2>Sua região está alagada?</h2>
          <button>Descubra aqui</button>
        </div>
      </div>
    </>
  );
}

export default Sobre;
