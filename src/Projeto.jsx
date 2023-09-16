import React, { useState } from "react";
import "./Projeto.css";
import MapaGoogle from "./MapaGoogle";

function Projeto() {
  const [inputValue, setInputValue] = useState("");
  const [resultado, setResultado] = useState("");
  const [valorAleatorio1, setValorAleatorio1] = useState(null);
  const [valorAleatorio2, setValorAleatorio2] = useState(null);
  const [pageHeightClass, setPageHeightClass] = useState("");
  const [riscoEnchente, setRiscoEnchente] = useState(""); // Estado para o texto de risco de enchente
  const [corBolinha, setCorBolinha] = useState(""); // Estado para a cor da bolinha

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
  };

  const gerarValoresAleatorios = () => {
    const valor1 = Math.floor(Math.random() * (300 - 50 + 1)) + 50;
    const valor2 = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    setValorAleatorio1(valor1);
    setValorAleatorio2(valor2);
  };

  const verificarRiscoEnchente = () => {
    const resultadoMultiplicacao = valorAleatorio1 * valorAleatorio2;

    if (resultadoMultiplicacao < 400) {
      setRiscoEnchente("Sem risco de enchente");
      setCorBolinha("verde");
    } else if (resultadoMultiplicacao < 1000) {
      setRiscoEnchente("Risco de enchente: Chamar suporte para verificar local");
      setCorBolinha("amarela");
    } else {
      setRiscoEnchente("Possível enchente: Chamar equipe para diminuir danos");
      setCorBolinha("vermelha");
    }
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
                <p>{valorAleatorio1} rpm</p><br />
                <p>Nível de água:</p>
                <p>{valorAleatorio2}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projeto;
