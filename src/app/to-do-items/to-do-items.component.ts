import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../to-do-item';
import { ITEMS } from '../mock-todo-items';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-to-do-items',
  imports: [FormsModule, MatSlideToggleModule],
  templateUrl: './to-do-items.component.html',
  styleUrl: './to-do-items.component.scss'
})

export class ToDoItemsComponent implements OnInit{
  items = ITEMS;
  toDoItem:ToDoItem = {
    id: 1,
    name: "John Doe",
    isComplete: false,
  };
  selectedItem!: ToDoItem;
  onSelect(item: ToDoItem): void {
    this.selectedItem = item;
  }
  update(isComplete: boolean) {
    this.selectedItem.isComplete = isComplete;
  };
  

  constructor() {};
  ngOnInit() {};
}
