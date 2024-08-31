import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgNetClone from '../assets/bgNetClone.jpeg';

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (email === "admin@teste.com" && password === "admin123") {
      localStorage.setItem("loggedIn", true);
      navigate("/home");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="h-screen bg-cover bg-center flex flex-col justify-between relative" style={{ backgroundImage: `url(${bgNetClone})` }}>
      <div className="absolute top-8 left-8">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix Logo" className="h-8" />
      </div>

      <div className="flex justify-center items-center flex-grow">
        <div className="bg-black bg-opacity-70 p-8 rounded-md max-w-md w-full text-white">
          <h1 className="text-3xl mb-6">Entrar</h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Email ou número de celular"
                className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="text-red-500 text-sm mt-1">Informe um email ou número de telefone válido.</p>
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Senha"
                className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-red-500 text-sm mt-1">A senha deve ter entre 4 e 60 caracteres.</p>
            </div>
            <button className="bg-red-600 w-full py-3 rounded mt-4">Entrar</button>
          </form>
          <div className="flex justify-between items-center mt-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>Lembre-se de mim</span>
            </label>
            <a href="#" className="text-sm hover:underline">Esqueceu a senha?</a>
          </div>
          <div className="text-center mt-6">
            <a href="#" className="text-white hover:underline">Novo por aqui? Assine agora.</a>
          </div>
        </div>
      </div>

      <footer className="bg-black bg-opacity-90 py-8 text-gray-400 text-sm">
        <div className="max-w-screen-lg mx-auto px-4">
          <p className="mb-4">Dúvidas? Ligue 0800 591 2876</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <a href="#" className="hover:underline">Perguntas frequentes</a>
            <a href="#" className="hover:underline">Central de Ajuda</a>
            <a href="#" className="hover:underline">Termos de Uso</a>
            <a href="#" className="hover:underline">Privacidade</a>
            <a href="#" className="hover:underline">Preferências de cookies</a>
            <a href="#" className="hover:underline">Informações corporativas</a>
          </div>
          <div className="mt-4">
            <button className="border border-gray-400 px-4 py-2 rounded bg-transparent text-gray-400 hover:bg-gray-700">
              <span className="mr-2">🌐</span> Português
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
