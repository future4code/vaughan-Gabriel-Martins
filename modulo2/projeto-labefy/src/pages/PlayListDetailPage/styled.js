import styled from 'styled-components';


export const TracksBox = styled.div`
border: 1px solid black;
background: black;
border-radius: 100px;
margin:  10px;
padding: 0 0 20px 0;
width: 350px;
display: flex; 
flex-direction: column;
align-items: center;
p{ 
    border-bottom: 1px solid black;
}



`

export const MainBoxPlayListDetail = styled.div`
border:1px solid black; 
width: 30%;
display: flex; 
flex-direction: column;
align-items: center;
margin: 200px auto;
color:white;
background: lightgray;
border-radius 100px;

button{ 
     background: lightblue;
     border-radius: 100px;
     padding: 5px;
     margin-top: 10px;
}

input{ 
    border-radius: 100px;
    margin: 20px;
    font-size: 1rem;
    padding: 5px 10px;
}

`