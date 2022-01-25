import React from 'react';
import axios from 'axios';



class  TelaListUsers extends React.Component{

  state={
    listUserArray:[],
  }

 
  componentDidMount(){ 
    this.getAllUsers()
  }


  getAllUsers =()=> { 
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const axiosConfig = {headers: {Authorization:"gabriel-martins-vaughan"}}
    

    axios.get(url,axiosConfig)
    .then((response) =>{ 
     this.setState({
          listUserArray: response.data, 
     })
    })
    .catch((erro)=> console.log(erro))
    
  }
  
  onClickApagar =()=> { 
    

  }
  
  
  
  render(){ 
   console.log(this.state.listUserArray)

   return (
     <div >
       {this.state.listUserArray.map( item => {
         return(<>
         <p key={item.id}> 
          {item.name}
         <button onClick={onClickApagar}>X</button>
         </p>
         
         </>
       )})}
    </div>
  );
}
}

export default TelaListUsers;
