import {Url_Base} from "../constants/Url_Base";
import axios from 'axios';



 const PostApllyToTrip = (id  , data )=> { 
     const url = `${Url_Base}/trips/${id}/apply`;
     const body  = data;

    return( 
        <h1>oi </h1> 
    )
}




export default PostApllyToTrip;