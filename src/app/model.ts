import { TodoItem } from "./todoitem";


export class Model {
   
    name: string;
    items: TodoItem [];

    constructor() {
        this.name = "Gizem";
        this.items = [
            {description: "kahvaltı", action: "yes"},
            {description: "spor", action: "no"},
            {description: "alışveriş", action: "yes"},
        ];
    }
}
