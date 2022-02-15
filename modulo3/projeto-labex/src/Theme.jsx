import { createGlobalStyle } from "styled-components";




export const GlobalStyles = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
}
`;

export const theme = { 

    colors: { 
       primaryText: "000", 
       secondaryText: 'gray', 
    }
    *{ 
        margin: 0,
        padding: 0,
    }

    
}