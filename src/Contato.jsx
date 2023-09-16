import React from 'react';

function Contato() {
  return (
    <>
    <div id="container-contato">
        <h1>Contato</h1>
        <div id="form-ctt">
            <h3>Nome</h3>
            <input type="text" placeholder='Digite seu nome aqui'/>
            <h3>E-mail</h3>
            <input type="text" placeholder='Digite seu e-mail aqui'/>
            <h3>Mensagem</h3>
            <textarea name="" id="" cols="30" rows="10" placeholder='Digite a mensagem que deseja nos enviar aqui'></textarea>
        </div>
    </div>
    </>
  );
}

export default Contato;
