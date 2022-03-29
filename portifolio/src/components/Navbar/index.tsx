import React from 'react';
import ReactDOM from 'react-dom';
import './Navbar.css'
import { FaBars } from 'react-icons/fa';
import { BsBook} from 'react-icons/bs';
import { FaPencilAlt } from 'react-icons/fa';
import { BsEmojiSunglasses } from 'react-icons/bs';
import { HiOutlinePhone } from 'react-icons/hi';
const perfil = require('./img/perfil.webp') 


function Navbar() {
  return (
    <>
      <div className='navbar'>
      <span className="menu-bar"><FaBars/></span>
      
      <img src={perfil} className="menu-img"></img>
      
      
      </div>
      <div className='nav-options'>
        <ul className='nav-options-ul'>
          <li className='nav-options-li'><BsBook className="icons-nav"/>  Portifolio</li>
          <li className='nav-options-li'><FaPencilAlt className="icons-nav" />Habilidades</li>
          <li className='nav-options-li'><BsEmojiSunglasses className="icons-nav" />Sobre mim</li>
          <li className='nav-options-li'><HiOutlinePhone className="icons-nav"/> Contato</li>
        </ul>
      </div>
    </>
  )
}

export default Navbar;
