import styled from 'styled-components';


export const PlayListToScreenBox = styled.div`
    margin: 10px; 
    border: 1px solid black;
    width:300px;
    padding:1rem; 
    display: flex;
    font-size: 1.5rem;
    justify-content: space-between;
    background: black;
    border-radius: 100px;
    box-shadow: 0 0 5px 1px ;



    
    button{ 
        padding: 1px 14px;
        /* font-size: rem; */
        border-radius: 5000px;
        &:hover{ 
            cursor:pointer;
            background-color:red;
            
        }
    }
    div{ 
        width:200px;
        padding: 5px  50px 10px 20px ;
        color: white;
        &:hover{ 
            cursor:pointer;
            /* background:lightblue; */
            color:lightblue;
            
        }
    }

`
export const MainBox = styled.div`
border: 1px solid black;
width: 30%;
margin: 100px auto; 
display: flex; 
flex-direction: column;
align-items:center;
background: gray;
border-radius: 100px;
box-shadow: 0 0 2px 2px gray ;


>button{ 
    align-self: flex-start;
    margin: 10px 40px ;
    background:lightblue;
    border-radius: 100px;
}
`