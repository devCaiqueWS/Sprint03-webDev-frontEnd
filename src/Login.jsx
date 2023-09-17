import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');
  const [messageBackground, setMessageBackground] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const storedUsername = sessionStorage.getItem('nomeDeUsuario');
    const storedPassword = sessionStorage.getItem('senha');

    if (username === 'adm@admin.com' && password === 'adm123') {
      setMessage('Login bem-sucedido como administrador!');
      setMessageColor('green');
      setMessageBackground('rgba(0, 128, 0, 0.19)');

      localStorage.setItem('username', username);

      const loginTime = new Date();
      localStorage.setItem('loginTime', loginTime.toString());
    } else if (username === storedUsername && password === storedPassword) {
      setMessage('Login bem-sucedido!');
      setMessageColor('green');
      setMessageBackground('rgba(0, 128, 0, 0.19)');

      localStorage.setItem('username', username);

      const loginTime = new Date();
      localStorage.setItem('loginTime', loginTime.toString());
    } else {
      setMessage('Credenciais inválidas. Tente novamente.');
      setMessageColor('red');
      setMessageBackground('rgba(255, 0, 0, 0.19)');
    }

    setTimeout(() => {
      setMessage('');
      setMessageColor('');
      setMessageBackground('');
    }, 15000);
  }

  return (
    <>
      <div id="form-login">
        <h1>FAÇA LOGIN</h1>
        <div
          className="mensagem"
          style={{ color: messageColor, backgroundColor: messageBackground }}
        >
          <p>{message}</p>
        </div>
        <br />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nome">Nome de usuário</label>
            <br />
            <input
              type="text"
              id="nome"
              placeholder="Digite seu nome aqui"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="senha">Senha</label>
            <br />
            <input
              type="password"
              id="senha"
              placeholder="Digite sua senha aqui"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
}

export default Login;
