import styled from 'styled-components'; 


export const PlayListToScreenBox = styled.div`
    margin: 10px; 
    border: 1px solid black;
    width:300px;
    padding:1rem; 
    display: flex;
    font-size: 1.5rem;
    justify-content: space-between;
    
    button{ 
        // padding: 10px;
        font-size: 1rem;
        &:hover{ 
            cursor:pointer;
            background-color:red;
        }
    }
    div{ 
        width:200px;
        padding: 5px  50px 10px 20px ;
        &:hover{ 
            cursor:pointer;
            background-color:lightblue;
        }
    }

`