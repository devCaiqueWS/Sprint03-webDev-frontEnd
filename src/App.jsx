import {} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import Footer from "./Footer";
import Sobre from "./Sobre";
import Projeto from "./Projeto";
import Login from "./Login";
import Contato from "./Contato";

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
