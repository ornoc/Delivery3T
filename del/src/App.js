import React, { useState, createContext } from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Users from './Users';
import Profile from './Profile';
import Restaurants from './Restaurants';
import Products from './Products';
import Login from './Login';
import Signup from './Signup';
import logo from './images/logo.png'; // Certifique-se de que a imagem está na pasta 'images'
import './styles.css'; // Certifique-se de que o arquivo styles.css está no caminho correto

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <header className="header">
          <div className="logo">
            <img src={logo} alt="Logo DeliverySnoops" />
            <h1>DeliverySnoops</h1>
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/" onClick={toggleMenu}>Início</Link></li>
              <li><Link to="/profile" onClick={toggleMenu}>Perfil</Link></li>
              <li><Link to="/restaurants" onClick={toggleMenu}>Restaurantes</Link></li>
              <li><Link to="/products" onClick={toggleMenu}>Produtos</Link></li>
              <li><Link to="/login" onClick={toggleMenu}>Login</Link></li>
              <li><Link to="/signup" onClick={toggleMenu}>Cadastro</Link></li>
            </ul>
          </nav>
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/users" />} />
            <Route path="/users" element={<Users />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>© 2024 DeliverySnoops. Todos os direitos reservados.</p>
        </footer>
      </div>
    </UserContext.Provider>
  );
}

export default App;
