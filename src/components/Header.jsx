// src/components/Header.js
import React from 'react';
import logo from '../assets/img/aiko.png';

const Header = () => {
  return (
    <div className="bg-white text-blue-950 py-6 border-b-2 px-6 flex items-center justify-center">
    <div className="flex items-start">
      <img src={logo} alt="Logo" className="h-12 mr-4" /> 
    </div>
    <nav>
      <ul className="flex space-x-4 text-blue-950 font-bold">
        <li><a href="https://aiko.digital" className="hover:text-gray-300">Home</a></li>
        <li><a href="https://aiko.digital/sobre-nos/" className="hover:text-gray-300">Sobre</a></li>
        <li><a href="https://aiko.digital/contato/" className="hover:text-gray-300">Contato</a></li>
      </ul>
    </nav>
  </div>
  );
};

export default Header;
