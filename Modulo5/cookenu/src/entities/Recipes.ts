
export class Recipes {
    constructor(
        private id: string,
        private user_id: string,
        private title: string,
        private description: string,
    ) {}
    public getUseId() {
        return this.user_id
    }
    public getTitle() {
        return this.title
    }
    public getDescription() {
        return this.description
    }
    public static toRecipesMode(data: any): Recipes {
        return new Recipes(data.id, data.user_id, data.title, data.description)
    }

}

