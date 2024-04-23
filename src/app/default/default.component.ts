import { NgFor } from '@angular/common';
import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  standalone: true,
  imports: [NgFor],
})
  

export class DefaultComponent {

  constructor() {
    effect(() => {
      console.log(this.counter, this.doubleCounter);
      
    })
    //Calls a function each time the signal value changes
    effect(() => {
      console.log(this.actions());
    });
  }

  actions = signal<string[]>([]);
  counter = signal(0);
  doubleCounter = computed(() => this.counter() * 2); //Computes a value based on a signal value and returns the new value

  increment() {
    this.counter.update((defaultValue) => defaultValue + 1);
    // this.actions.mutate((initialValue) => initialValue.push('INCREMENT'))
    this.actions.update((initialValue) => [...initialValue, 'INCREMENT']);
  }

  decrement() {
    this.counter.update(defaultValue => defaultValue - 1)
    this.actions.mutate((initialValue) => initialValue.push('DECREMENT'))
  }
}
