import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  taskId=2;
  todoList=[
    {
        id:1,'task':"Default One"
    }
  ]


  constructor(){}

  addTodo(taskName:any){
    this.todoList.push({"id":this.taskId++,'task':taskName})
  }

  deleteTodo(index:any){
    this.todoList.splice(index,1)
  }

}
