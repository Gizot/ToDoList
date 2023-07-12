import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  constructor() { } 
  private name = "Gizem";
  //items = ["item1","item2","item3"];
  items = [
    {id : 1, description: "kahvaltı", action: "yes"},
    {id : 2, description: "Spor", action: "no"},
    {id : 3, description: "Yemek", action: "yes"}
  ]

  getName() {
    return this.name;
  }
}
