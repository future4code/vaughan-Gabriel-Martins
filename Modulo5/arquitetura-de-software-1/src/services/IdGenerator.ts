import {v4} from "uuid"; 



export class IdGenerator { 

    public generator = () => { 
        return v4();
    }

}