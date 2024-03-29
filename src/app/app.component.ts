import { Component, OnInit } from '@angular/core';
import { trigger, animate, style, transition, keyframes } from '@angular/animations';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 /* animations: [
    trigger('moveInLeft', [
       transition('void=> *', [style({transform: 'translateX(300px)'}),
         animate(200, keyframes([
          style({transform: 'translateX(300px)'}),
          style({transform: 'translateX(0)'})
           ]))]),
       transition('*=>void', [ style({transform: 'translateX(0px)'}),
         animate(100 , keyframes([
          style({transform: 'translateX(0px)'}),
          style({transform: 'translateX(300px)'})
           ]))])
     ])
 ]*/
})
export class AppComponent implements OnInit {
  todoArray = [];

  constructor( private ts: TodosService) {
  }

  ngOnInit() {

    this.todoArray = this.ts.getTodo();

/*    if ( localStorage.getItem('todoArray')) {
      this.todoArray = JSON.parse(localStorage.getItem('todoArray'));
    } */
  }
  // submit Form
  todoSubmit( value ) {
    if (value !== '' ) {
      this.ts.add(value);
      /*this.todoArray.push( value.todo);
      localStorage.setItem('todoArray', JSON.stringify(this.todoArray)); */
    }  else  {
     alert('Field required **');
   }
  }

  addTodo(value) {
    this.ts.add(value);
    /*this.todoArray.push( value );
      localStorage.setItem('todoArray', JSON.stringify(this.todoArray));*/
      console.log( this.todoArray );
    }
/*delete item*/
  deleteItem(todo) {
    this.ts.delete(todo);
    /*
    for ( let i = 0 ; i <= this.todoArray.length ; i ++) {
    if ( todo === this.todoArray[i]) {
      this.todoArray.splice( i , 1 );
    }
    }
    localStorage.setItem('todoArray', JSON.stringify(this.todoArray));*/
 }


}
