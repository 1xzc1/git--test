import { Component } from '@angular/core';
import { AnotherTestComponentComponent } from '../another-test-component/another-test-component.component';

@Component({
  selector: 'app-test-component',
  imports: [AnotherTestComponentComponent],
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.scss'
})
export class TestComponentComponent {
  title: string = 'test title';
  comment: string = 'comment string';
  number: number = 2;
  boolean: boolean = false;
}
