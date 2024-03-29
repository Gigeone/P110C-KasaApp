import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="container">
      <h1 className='error'>
        404
      </h1>
      <h2 className="message">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <div className='link'>
        <Link to="/">Retour à la page d'accueil</Link>
      </div>
    </div>
  )
}

export default Error