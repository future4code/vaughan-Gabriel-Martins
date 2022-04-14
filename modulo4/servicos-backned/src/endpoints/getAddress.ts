import axios from "axios";
import {BASE_URL} from "../BASE_URL";
import { Address } from "../types/Address";





const getAddress = async (cep :string , numero: string , complemento : string | null) : Promise<Address| null>  => { 
    try{ 
        const response  = await axios.get(`${BASE_URL}${cep}/json`)
        
        const {logradouro, bairro, localidade , uf} = response.data
       
        if(!complemento){ 
            complemento = null;
        }
         
        const address : Address = {
            "Logradouro": logradouro,
            "Bairro": bairro, 
            "Cidade":localidade , 
            "Estado": uf, 
            "Numero": numero, 
            // Eu realmente não sei devo devolver null ou vazio 
            // para o DB Acredito que deveria ser null entao coloquei aqui.
            "Complemento": (complemento ? complemento  :  "null" )
        }    
        console.log("getadress", address)
        return address
    }
    catch(error){ 
        console.error("Algo deu errado na requisão")
        return null;

    }
}



export default getAddress;