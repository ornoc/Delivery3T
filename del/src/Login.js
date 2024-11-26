import React, { useState, useContext } from 'react';
import { UserContext } from './App';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticação aqui
    // Simulação de autenticação com dados de cadastro
    const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));
    if (registeredUser && registeredUser.email === email && registeredUser.password === password) {
      setUser(registeredUser);
      setMessage('Login realizado com sucesso!');
    } else {
      setMessage('Email ou senha incorretos.');
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;