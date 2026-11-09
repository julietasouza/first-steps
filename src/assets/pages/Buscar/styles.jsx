import styled from 'styled-components'

export const ContainerBuscar = styled.main`

    width: 90%;
    max-width: 1200px;
    margin: 60px auto;

    h1 {
        font-size: 32px;
        margin-bottom: 12px;
    }

    p {
        margin-bottom: 30px;
        color: #504f4f;
    }

    .resultados {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .resultado {
        padding: 25px;
        border: 1px solid #78767D;
        border-radius: 12px;
    }

    .resultado h2 {
        margin-bottom: 10px;
    }

    .resultado p {
        margin-bottom: 15px;
    }

    .resultado a {
        text-decoration: none;
        font-weight: bold;
    }

    .sem-resultados {
        padding: 30px;
        text-align: center;
    }

`