import { createGlobalStyle } from "styled-components";
import { red } from "@material-ui/core/colors";




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
       primaryText: red[500], 
       primary: red[500], 
       secondaryText: "#000", 
       secondary: 'gray', 
    }
    *{ 
        margin: 0,
        padding: 0,
    }

    
}