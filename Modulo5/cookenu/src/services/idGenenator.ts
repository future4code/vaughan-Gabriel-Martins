import { v4 } from "uuid";

export class GeneratorId {

    public generator() {
        return v4();
    }
}