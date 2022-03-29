import React from 'react';
import './Navbar.css'
import { FaBars } from 'react-icons/fa';
const perfil = require('./img/perfil.webp') 



function Navbar() {
  return (
    <>
      <div className='navbar'>
      <a href='index.html'className="menu-bar"><FaBars/></a>
      <img src={perfil} className="menu-img"></img>
      <h1> shit</h1>
      
      </div>

    </>
  )
}

export default Navbar;
