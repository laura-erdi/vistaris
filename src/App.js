import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // Cambiar estado cuando el óptico inicie sesión
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenido a Vistaris</h1>
        {isLoggedIn ? (
          <Dashboard />
        ) : (
          <LoginForm onLogin={handleLogin} />
        )}
      </header>
    </div>
  );
}

// Componente simple para la página después de iniciar sesión
function Dashboard() {
  return <h2>Panel del Óptico</h2>;
}

export default App;