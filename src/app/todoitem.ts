// export class TodoItem {
//     description: string;
//     action: string;

//     constructor(description : string, action : string) {
//         this.description = description;
//         this.action = action;
//     }
// }

//yukarıda ki yolla da aşağıdaki gibi de class oluşturup nesne tanımlayabilirsin.

// export class TodoItem {
//     constructor(public description: string, public action: string) {
//         this.description = description;
//         this.action = action;
//     }
// }


//aşağıdaki örnekte bir interface oluşturduk. Interfacelerde
//constructer olmayacağı için sadece (fieldlarını) belirttik.

export interface TodoItem {
    description: string;
    action: boolean;

    
}
