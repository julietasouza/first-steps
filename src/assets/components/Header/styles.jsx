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
    position: relative;
    padding-bottom: 5px;
    transition: color 0.3s ease;
    font-family: 'Playfair', sans-serif;
}

/* Linha animada */
.páginas a::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #7B41B4;
    transition: width 0.3s ease;
}

.páginas a:hover {
    color: #7B41B4;
}

.páginas a:hover::after {
    width: 100%;
}

.suportes {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.suportes img {
    width: 30px;
}

.suportes p {
    color: #0E8358;
    font-weight: bold;
}

.suportes:hover {
    color: #255B47;
    text-decoration: underline #255B47;
}
`