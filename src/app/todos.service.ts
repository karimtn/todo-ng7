import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todoArray = [];

  constructor() { }

  getTodo() {
    if ( localStorage.getItem('todoArray')) {
      this.todoArray = JSON.parse(localStorage.getItem('todoArray'));
      return this.todoArray;
    }
  }

  add(value) {
    this.todoArray.push( value );
    localStorage.setItem('todoArray', JSON.stringify(this.todoArray));
    console.log( this.todoArray );
  }
/*delete item*/
  delete(todo) {
    for ( let i = 0 ; i <= this.todoArray.length ; i ++) {
      if ( todo === this.todoArray[i]) {
        this.todoArray.splice( i , 1 );
      }
    }
      localStorage.setItem('todoArray', JSON.stringify(this.todoArray));
  }

}
