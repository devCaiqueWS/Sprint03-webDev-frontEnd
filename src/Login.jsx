import React from 'react';
import './Login.css'

function Login() {
  return (
    <>
    <div id="form-login">
      <h1>FAÇA LOGIN</h1>
      <form action="">
        <div>
          <label htmlFor="nome">Nome de usuário</label>
          <br />
          <input type="text" id="nome" placeholder="Digite seu nome aqui" />
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <br />
          <input
            type="password"
            id="senha"
            placeholder="Digite sua senha aqui"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
    </>
  );
}

export default Login;
