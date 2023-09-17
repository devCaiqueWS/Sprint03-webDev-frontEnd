import {} from 'react'
import '../css/Footer.css'
import darkMode from "../assets/darkmode.svg";

function Footer(){
  return(
    <>
     <footer className="container-footer">
      <div>
        <p>DeskTOPS - Todos os direitos reservados &copy; Copyright 2023</p>
        <img src={darkMode} alt="Ícone Dark Mode"/>
      </div>
     </footer>
    </>
  )
}
export default Footer