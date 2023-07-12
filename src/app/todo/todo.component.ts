import { Component } from '@angular/core';
import { TodoItem } from '../todoitem';
import { Model } from '../model';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  constructor() { } 

  model = new Model();
  

  getName() {
    return this.model.name;
  }

  getItems() {
    return this.model.items; 
  }

  addItem(txtItem: any) {
    console.log(txtItem);
  }
}
