import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  goToIntroduction() {
    this._router.navigate(['/introduction']);
  }

  goToFlexLayout() {
    this._router.navigate(['/flexlayout']);
  }

  goToTypografie() {
    this._router.navigate(['typografie']);
  }

  goToTodoExample() {
    this._router.navigate(['/todo']);
  }

}
