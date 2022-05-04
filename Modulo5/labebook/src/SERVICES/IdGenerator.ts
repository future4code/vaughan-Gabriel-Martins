import { v4 } from "uuid";


export class IdGenerator{ 
    protected static generate (){ 
        return v4();
    }
}