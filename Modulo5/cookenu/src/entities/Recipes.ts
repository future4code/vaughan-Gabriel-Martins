
export class Recipes {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private created_at: string,
        private user_id: string,
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
    public getCreated_at() {
        return this.created_at
    }
    public static toRecipesMode(data: any): Recipes {
        return new Recipes(data.id,
            data.user_id,
            data.title,
            data.description,
            data.created_at
            )
    }

}

