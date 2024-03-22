import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <img src="../Logo.png" alt="logo Kasa" className="logo" />
      <nav className='nav'>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A propos</Link>
          </li>
        </ul>
        
      </nav>
      
    </header>
  )
}

export default Header