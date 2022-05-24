import { v4 } from "uuid";


export class IdGenerator { 
    private generator = () => {
        return v4()
    }
}