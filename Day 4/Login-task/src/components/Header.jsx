import React from 'react'
import Logo from '../assets/logo.png'
import './Header.css'
const Header = () => {
  return (
    <header>
        <img src={Logo} alt="Logo" />
        <h1>ReactArt</h1>
        <p>A community of artists and art-lovers</p>
    </header>
  )
}

export default Header