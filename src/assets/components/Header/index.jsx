import React from 'react'
import { ContainerHeader } from './styles'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <ContainerHeader>
        <div className='logo'>
            <h1>First Steps</h1>
            <h4>AI CAREER PLATFORM</h4>
        </div>

        <div className='páginas'>
            <Link to="/">Currículo Inteligente</Link>
            <Link to="/Vagas">Vagas Recomendadas</Link>
            <Link></Link>
            <Link></Link>
        </div>
    </ContainerHeader>
  )
}

export default Header