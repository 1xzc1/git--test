import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoItemsComponent } from './to-do-items/to-do-items.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ToDoItemsComponent,
    TestComponentComponent,
    UpperCasePipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title:string = 'To Do List';
}
