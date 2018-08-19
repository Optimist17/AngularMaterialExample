import { CreateTodoDialogOptions } from './../../dialogs/create-todo-dialog/create-todo-dialog-options';
import { CreateTodoDialogComponent } from './../../dialogs/create-todo-dialog/create-todo-dialog.component';
import { ITodoItem } from './../../models/todo/itodo-item';
import { TodoService } from './../../services/todo/todo.service';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-todo-example',
  templateUrl: './todo-example.component.html',
  styleUrls: ['./todo-example.component.css']
})
export class TodoExampleComponent implements OnInit {

  todos: ITodoItem[];
  isLoadingData = false;

  constructor(
    private _service: TodoService,
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog
  ) {

    this.todos = new Array();

   }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.isLoadingData = true;

    this._service.getAllTodos().pipe(finalize(() => {
      this.isLoadingData = false;
    })).subscribe((result) => {
      if (result) {
        this.todos = result;
      } else {
        this._snackBar.open('Daten konnten nicht geladen werden', 'Fehler', { duration: 4500 });
      }
    }, (err) => {
      this._snackBar.open('Daten konnten nicht geladen werden', 'Fehler', { duration: 4500 });
    });
  }

  completeTodo(id: number) {
    this._service.completeTodo(id).subscribe((result) => {
      this.loadData();
    }, (err) => {
      this._snackBar.open('Todo konnte nicht beendet werden', 'Fehler', { duration: 4500 });
    });
  }

  addTodo() {
    const dialogRef = this._dialog.open(CreateTodoDialogComponent, { data: new CreateTodoDialogOptions() });
    dialogRef.afterClosed().subscribe((result) => {
        this.loadData();
    }, (err) => {
      this._snackBar.open('Todo konnte nicht erstellt werden', 'Fehler', { duration: 4500 });
    });
  }

  deleteTodo(id: number) {
    this._service.deleteTodo(id).subscribe((result) => {
      if (result) {
        this.loadData();
      } else {
        this._snackBar.open('Todo konnte nicht gelöscht werden', 'Fehler', {duration: 4500});
      }
    }, (err) => {
      this._snackBar.open('Todo konnte nicht gelöscht werden', 'Fehler', {duration: 4500});
    });
  }

}
