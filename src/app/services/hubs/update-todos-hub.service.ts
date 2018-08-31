import { ITodoItem } from './../../models/todo/itodo-item';
import { Observable, Subject, from } from 'rxjs';
import { HubService } from './hub.service';
import { IHubService } from './ihub-service';
import { Injectable } from '@angular/core';
import { HubConnection } from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class UpdateTodosHubService implements IHubService {

  private _connection: HubConnection;
  public todoItemChanged: Subject<ITodoItem[]>;

  private _hubConnectionEstablished = false;

  constructor(
    private _hubService: HubService
  ) {
    this.todoItemChanged = new Subject<ITodoItem[]>();
   }

  public connect(): Observable<void> {
    this._connection = this._hubService.getHubConnection();

    const promise = this._connection.start()
      .then(() => {
        this._hubConnectionEstablished = true;
      })
      .catch(err => {
        console.log('HubConnection fehlgeschlagen');
      });

      this._connection.on('TodosChanged', (data: ITodoItem[]) => {
        this.todoItemChanged.next(data);
      });

      return from(promise);
  }

  public disconnect() {
    this._connection.stop();
  }

}
