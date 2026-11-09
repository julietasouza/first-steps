import styled from "styled-components";

export const ContainerHeader = styled.header`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
gap: 30px;

.logo {
    display: flex;
    flex-direction: column;
}

.logo h1 {
    color: #CA94FF;
    font-family: 'Headline', sans-serif;
    margin-left: 10px;
}

.logo h4 {
    color: #929097;
    margin-left: 8px;
    font-family: 'Playfair', sans-serif;
}

.páginas {
    display: flex;
    gap: 20px;
}

.páginas a {
    color: #DDB7FF;
    text-decoration: none;
}

.páginas a:hover {
    color: #7B41B4;
    text-decoration: underline #7B41B4;
}
`