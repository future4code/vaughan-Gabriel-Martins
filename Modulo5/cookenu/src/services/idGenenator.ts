import { v4 } from "uuid";

export class GeneratorId {

    generator() {
        return v4();
    }
}