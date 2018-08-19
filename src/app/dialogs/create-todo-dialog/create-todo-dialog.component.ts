import { ICreateTodoItem } from './../../models/todo/icreate-todo-item';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateComponentOptions } from '@angular/core/src/render3/component';
import { TodoService } from '../../services/todo/todo.service';

@Component({
  selector: 'app-create-todo-dialog',
  templateUrl: './create-todo-dialog.component.html',
  styleUrls: ['./create-todo-dialog.component.css']
})
export class CreateTodoDialogComponent implements OnInit {

  name = '';

  constructor(
    private _dialogRef: MatDialogRef<CreateTodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: CreateComponentOptions,
    private _service: TodoService
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this._dialogRef.close();
  }

  onYesClick() {
    const item: ICreateTodoItem = {
      name: this.name,
      isComplete: false
    };
    this._service.createTodo(item).subscribe((result) => {
        this._dialogRef.close(result);
    }, (err) => {

    });
  }

}
