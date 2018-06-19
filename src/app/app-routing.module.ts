import { TypografieComponent } from './pages/typografie/typografie.component';
import { FlexLayoutComponent } from './pages/flex-layout/flex-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './pages/introduction/introduction.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'flexlayout', component: FlexLayoutComponent },
  { path: 'typografie', component: TypografieComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
