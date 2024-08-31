import React from 'react';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-black bg-opacity-80 fixed top-0 left-0 w-full z-10">
      <div className="flex justify-between items-center p-4 max-w-screen-xl mx-auto">
        
        <div className="flex items-center space-x-6">
          <div className="text-red-600 text-4xl font-bold mr-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix Logo" className="h-8" />
          </div>
          <nav className="flex space-x-6 text-white">
            <a href="#" className="hover:underline">Início</a>
            <a href="#" className="hover:underline">Séries</a>
            <a href="#" className="hover:underline">Filmes</a>
            <a href="#" className="hover:underline">Bombando</a>
            <a href="#" className="hover:underline">Minha lista</a>
            <a href="#" className="hover:underline">Navegar por idiomas</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4 text-white">
          <a href="#" className="text-xl">
            <FaSearch />
          </a>
          <a href="#" className="text-xl">
            <FaBell />
          </a>
          <a href="#" className="text-2xl">
            <FaUserCircle />
          </a>
        </div>
      </div>
    </header>
  );
}
