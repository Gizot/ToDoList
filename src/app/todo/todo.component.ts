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

  message = "";

  model = new Model();
  

  getName() {
    return this.model.name;
  }

  getItems() {
    return this.model.items; 
  }

  addItem(value: string) {

    if(value!="") {
      this.model.items.push({description: value, action: "no"},)
    } else {
      alert("Bilgileri giriniz. ")
    }
   
  }
}
