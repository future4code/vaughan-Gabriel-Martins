import { CircularProgress } from "@material-ui/core";
import { LoadingContaniner } from "./style";




const Loading = () => { 
    
    
    return ( 
            
        <LoadingContaniner>
        <CircularProgress
        style={{color:"white"}}
        size={80}/>
        </LoadingContaniner>

    )
}

export default Loading;