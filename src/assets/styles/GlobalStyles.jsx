import { createGlobalStyle } from "styled-components"
import Headline from "../fonts/Headlines-Bold.otf"
import Playfair from "../fonts/PlayfairDisplay-Regular.ttf"

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: black;
}

@font-face {
    font-family: 'Headline';
    src: url(${Headline}) format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Playfair';
    src: url(${Playfair}) format('truetype');
    font-weight: normal;
    font-style: normal;
}
`