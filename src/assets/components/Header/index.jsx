import React from 'react'
import { ContainerHeader } from './styles'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import chat from "../../img/chat-balloon.png"

const Header = () => {
    const [pesquisa, setPesquisa] = useState("")

    const navigate = useNavigate()

    const pesquisar = (e) => {
        e.preventDefault()

        if (pesquisa.trim() === "") {
            return
        }

        navigate(`/buscar?q=${encodeURIComponent(pesquisa)}`)

        setPesquisa("")
    }

  return (
    <ContainerHeader>
        <div className='logo'>
            <h1>First Steps</h1>
            <h4>AI CAREER PLATFORM</h4>
        </div>

        <div className='páginas'>
            <Link to="/">Currículo Inteligente</Link>
            <Link to="/Vagas">Vagas Recomendadas</Link>
            <Link to='/Simulador'>Simulador de Entrevista</Link>
            <Link to='/Perfil'>Perfil Profissional</Link>
        </div>

        <form className='pesquisa' onSubmit={pesquisar}>
            <input type="search" placeholder='Pesquisar...' value={pesquisa} onChange={(e) => setPesquisa(e.target.value)} />
        </form>

        <div className='suportes'>
            <img src={chat} alt="" />
            <p>Suporte</p>
        </div>
    </ContainerHeader>
  )
}

export default Header