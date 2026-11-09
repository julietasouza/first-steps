import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ContainerBuscar } from './styles'

const Buscar = () => {

    const [searchParams] = useSearchParams()

    const pesquisa = searchParams.get('q') || ""

    const normalizar = (texto) => {
        return texto
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
    }

    const conteudos = [
        {
            titulo: "Currículo Inteligente",
            descricao: "Crie e personalize seu currículo profissional com auxílio de inteligência artificial.",
            palavras: "curriculo emprego experiencia profissional documento",
            rota: "/"
        },
        {
            titulo: "Vagas Recomendadas",
            descricao: "Encontre oportunidades de emprego e vagas compatíveis com seu perfil.",
            palavras: "vagas emprego trabalho oportunidade carreira",
            rota: "/Vagas"
        },
        {
            titulo: "Simulador de Entrevista",
            descricao: "Prepare-se para entrevistas de emprego e pratique suas respostas.",
            palavras: "entrevista simulador perguntas respostas recrutamento",
            rota: "/Simulador"
        },
        {
            titulo: "Perfil Profissional",
            descricao: "Visualize e gerencie suas informações profissionais.",
            palavras: "perfil profissional usuario dados habilidades",
            rota: "/Perfil"
        }
    ]

    const resultados = conteudos.filter((item) => {
        const texto = normalizar(
            item.titulo + " " +
            item.descricao + " " +
            item.palavras
        )

        return texto.includes(normalizar(pesquisa))
    })

    return (
        <ContainerBuscar>

            <h1>Resultados da pesquisa</h1>

            <p>
                Você pesquisou por: <strong>{pesquisa}</strong>
            </p>

            {resultados.length > 0 ? (

                <div className="resultados">

                    {resultados.map((item, index) => (
                        <div className="resultado" key={index}>

                            <h2>{item.titulo}</h2>

                            <p>{item.descricao}</p>

                            <Link to={item.rota}>
                                Acessar página
                            </Link>

                        </div>
                    ))}

                </div>

            ) : (

                <div className="sem-resultados">
                    <h2>Nenhum resultado encontrado</h2>
                    <p>
                        Não encontramos conteúdos relacionados à sua pesquisa.
                        Tente utilizar outras palavras.
                    </p>
                </div>

            )}

        </ContainerBuscar>
    )
}

export default Buscar