import {} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/App.css";
import Nav from "./componentes/Nav";
import Home from "./componentes/Home";
import Footer from "./componentes/Footer";
import Sobre from "./componentes/Sobre";
import Projeto from "./componentes/Projeto";
import Login from "./componentes/Login";
import Contato from "./componentes/Contato";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sobre" element={<Sobre/>} />
          <Route path="/Projeto" element={<Projeto />} />
          <Route path="/Contato" element={<Contato />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
