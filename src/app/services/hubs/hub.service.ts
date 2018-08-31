import { Injectable } from '@angular/core';
import { HubConnection } from '@aspnet/signalr';

import * as signalR from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class HubService {
  private _apiUrl = 'http://localhost:59267/';
  private _hubUrl = 'todoHub';


  constructor() { }

  public getHubConnection(): HubConnection {
    const url = this._apiUrl + this._hubUrl;

    const connection = new signalR.HubConnectionBuilder().withUrl(url).build();

    return connection;
  }
}
