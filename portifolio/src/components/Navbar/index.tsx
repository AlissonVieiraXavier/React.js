import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './Navbar.css'
import { FaBars } from 'react-icons/fa';
import { BsBook} from 'react-icons/bs';
import { FaPencilAlt } from 'react-icons/fa';
import { BsEmojiSunglasses } from 'react-icons/bs';
import { HiOutlinePhone } from 'react-icons/hi';
import { MdComputer } from 'react-icons/md';
//const perfil = require('./img/perfil.webp');
//<img src={perfil} className="menu-img"></img> 


function Navbar() {
  const [isOpen, setIsOpen] =  useState(false);
  const handleToggle = () =>{
    setIsOpen(!isOpen);
  }
 
  return (
    <>
      <div className='navbar'>
      <div onClick={handleToggle} className="menu-bar">
        <FaBars/>
        </div>
      <h1 className='titletop'> Dev. Alisson Xavier  <MdComputer className="icons-nav" /></h1>
      
      
      </div>
      <div className={`${isOpen ? 'nav-options-active' : 'nav-options' }`}>
        <ul className='nav-options-ul'>
          <a href="#" className='nav-options-li'><BsBook className="icons-nav"/>  Portifolio</a>
          <a href="#" className='nav-options-li'><FaPencilAlt className="icons-nav" />Habilidades</a>
          <a href="#" className='nav-options-li'><BsEmojiSunglasses className="icons-nav" />Sobre mim</a>
          <a href="#" className='nav-options-li'><HiOutlinePhone className="icons-nav"/> Contato</a>
        </ul>
      </div>
    </>
  )
}

export default Navbar;
