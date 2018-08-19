import { Injectable, Inject } from '@angular/core';
import { ServiceEndpoints } from '../helper/service-endpoints.enum';

@Injectable({
  providedIn: 'root'
})
export class UriService {

  private _uriDict: { [endpoint: number]: string };
  private _apiUrl = 'http://localhost:59267';

  constructor(
  ) {
    this._uriDict = {};
    this._uriDict[ServiceEndpoints.AllTodos] = this._apiUrl + '/api/todo/all';
    this._uriDict[ServiceEndpoints.CompleteTodo] = this._apiUrl + '/api/todo/completeTodo';
    this._uriDict[ServiceEndpoints.CreateTodo] = this._apiUrl + '/api/todo/addItem';
    this._uriDict[ServiceEndpoints.DeleteTodo] = this._apiUrl + '/api/todo/deleteTodo';
  }

  public getUri(endpoint: ServiceEndpoints): string {
    return this._uriDict[endpoint];
  }
}
