import { ICreateTodoItem } from './../../models/todo/icreate-todo-item';
import { Observable } from 'rxjs';
import { WebClientService } from './../web-client.service';
import { Injectable } from '@angular/core';
import { ITodoItem } from '../../models/todo/itodo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private _webServiceClient: WebClientService
  ) { }

  public getAllTodos(): Observable<ITodoItem[]> {
    return this._webServiceClient.getAllTodos();
  }

  public completeTodo(id: number): Observable<boolean> {
    return this._webServiceClient.completeTodo(id);
  }

  public createTodo(item: ICreateTodoItem): Observable<boolean> {
    return this._webServiceClient.createTodo(item);
  }

  public deleteTodo(id: number): Observable<boolean> {
    return this._webServiceClient.deleteTodo(id);
  }
}
