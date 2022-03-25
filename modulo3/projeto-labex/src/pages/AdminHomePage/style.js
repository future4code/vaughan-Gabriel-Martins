import styled from 'styled-components';



export const CardStyledDiv = styled.div`
padding: 16vh 0;
margin: 10px auto;
max-width: 600px;
width: 60vw;
/* background: red; */
`

export const StyledDivButton = styled.div`
display: flex; 
align-items: center;
justify-content:space-around;
margin: 10% auto;
max-width: 580px;
width: 55vw;
`
export const Cards  = styled.div`
display: flex; 
height: 48px;
justify-content:space-;
box-shadow: 0 0 3px 2px gray;
border-radius: 5px;
align-items: center;
justify-content:space-between;
padding: 2rem;
font-size:1.2rem;
margin: 1% auto;
max-width: 580px;
width: 55vw;

&:hover{ 
    cursor: pointer;
    background: #737272;
    
}
`