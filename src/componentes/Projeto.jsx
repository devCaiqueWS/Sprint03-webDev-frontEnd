import React, { useState } from "react";
import "../css/Projeto.css";
import MapaGoogle from "./MapaGoogle";

function Projeto() {
  const [inputValue, setInputValue] = useState("");
  const [resultado, setResultado] = useState("");
  const [fluxo, setFluxo] = useState(null);
  const [nivel, setNivel] = useState(null);
  const [pageHeightClass, setPageHeightClass] = useState("");
  const [riscoEnchente, setRiscoEnchente] = useState("");
  const [corBolinha, setCorBolinha] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setResultado(inputValue);
    setInputValue("");
    gerarValoresAleatorios();
    verificarRiscoEnchente();
    setPageHeightClass("extended-height");

    sessionStorage.setItem("resultado", resultado);
    sessionStorage.setItem("fluxo", fluxo);
    sessionStorage.setItem("nivel", nivel);
    sessionStorage.setItem("riscoEnchente", riscoEnchente);
    sessionStorage.setItem("corBolinha", corBolinha);
  };

  const gerarValoresAleatorios = () => {
    const novoFluxo = Math.floor(Math.random() * (300 - 50 + 1)) + 50;
    const novoNivel = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    setFluxo(novoFluxo);
    setNivel(novoNivel);
  };

  const verificarRiscoEnchente = () => {
    const resultadoMultiplicacao = fluxo * nivel;
    let novaCorBolinha = "";

    if (resultadoMultiplicacao < 500) {
      setRiscoEnchente("Sem risco de enchente");
      novaCorBolinha = "verde";
    } else if (resultadoMultiplicacao < 1000) {
      setRiscoEnchente("Risco de enchente: Chamar suporte para verificar local");
      novaCorBolinha = "amarela";
    } else {
      setRiscoEnchente("Possível enchente: Chamar equipe para diminuir danos");
      novaCorBolinha = "vermelha";
    }

    setCorBolinha(novaCorBolinha);
  };

  return (
    <>
      <div id="container-projeto" className={pageHeightClass}>
        <h1>Área de administração</h1>
        <h2>Informe o endereço da área desejada</h2>
        <div id="mapa">
          <div className="busca">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Digite o endereço aqui"
                value={inputValue}
                onChange={handleInputChange}
                style={{ display: "inline-block" }}
              />
              <button type="submit" style={{ display: "inline-block" }}>Enviar</button>
            </form>
          </div>
          <MapaGoogle />
          <div id="resultados">
            {resultado && (
              <>
                <h2>{resultado}</h2>
                <div className={`bolinha ${corBolinha}`}></div>
                <p>{riscoEnchente}</p><br />
                <p>Fluxo de água:</p>
                <p>{fluxo} rpm</p><br />
                <p>Nível de água:</p>
                <p>{nivel}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projeto;
