import styled from 'styled-components'


const MainContainerBox = styled.div`
   height:80vh; 
   width: 40vh;
   border: 1px solid black;
   box-shadow: 0 0 50px rgba(42, 42, 42, 1);
   margin: 5% auto;
   position:relative;
`

const MainContainer = ({children, size}) => { 
    
    return ( 
        <MainContainerBox> 
         {children} 
        </MainContainerBox>
    )
}


export default MainContainer;

