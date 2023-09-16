import {} from "react";
import "./Projeto.css";

function Projeto() {
  return (
    <>
      <div id="container-projeto">
        <h1>Área de administração</h1>
        <h2>informe o endereço da área desejada</h2>
        <div id="mapa">
          <div className="busca">
            <input type="text" placeholder="Digite o endereço aqui"/>
            <button type="Submit">Enviar</button>
          </div>
          <img src="" alt="" />
          <div id="resultados">
          
        </div>
        </div>        
      </div>
    </>
  );
}
export default Projeto;
