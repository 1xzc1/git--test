import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../to-do-item';

@Component({
  selector: 'app-to-do-items',
  imports: [],
  templateUrl: './to-do-items.component.html',
  styleUrl: './to-do-items.component.scss'
})

export class ToDoItemsComponent implements OnInit{
  toDoItem:ToDoItem = {
    id: 1,
    name: "John Doe",
    isComplete: false
  };

  constructor() {};
  ngOnInit() {};
}
