import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{ title }}</h1>
    <h2>La base es {{ base }}</h2>
    <button (click)="increase(-base)">-{{ base }}</button>
    <span>{{ counter }}</span>
    <button (click)="increase(base)">+{{ base }}</button>
  `,
})
export class CounterComponent {
  title = 'Counter App';
  counter: number = 10;
  base: number = 10;

  increase(value: number) {
    this.counter += value;
  }
}
