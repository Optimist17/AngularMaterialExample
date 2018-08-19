import { ICreateTodoItem } from './../models/todo/icreate-todo-item';
import { ITodoItem } from './../models/todo/itodo-item';
import { UriService } from './uri.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceEndpoints } from '../helper/service-endpoints.enum';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebClientService {

  constructor(
    private _httpClient: HttpClient,
    private _uriService: UriService
  ) { }

  public getAllTodos(): Observable<ITodoItem[]> {
    const url = this._uriService.getUri(ServiceEndpoints.AllTodos);
    return this._httpClient.get<ITodoItem[]>(url);
  }

  public completeTodo(id: number): Observable<boolean> {
    const url = this._uriService.getUri(ServiceEndpoints.CompleteTodo);
    return this._httpClient.post<boolean>(url, id);
  }

  public createTodo(item: ICreateTodoItem): Observable<boolean> {
    const url = this._uriService.getUri(ServiceEndpoints.CreateTodo);
    return this._httpClient.post<boolean>(url, item);
  }

  public deleteTodo(id: number): Observable<boolean> {
    let url = this._uriService.getUri(ServiceEndpoints.DeleteTodo);
    url += '/' + id;
    return this._httpClient.delete<boolean>(url);
  }
}
