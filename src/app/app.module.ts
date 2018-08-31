import { WebClientService } from './services/web-client.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { AppComponent } from './app.component';
import {MatDividerModule} from '@angular/material/divider';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutComponent } from './pages/flex-layout/flex-layout.component';
import { TypografieComponent } from './pages/typografie/typografie.component';
import { TodoExampleComponent } from './pages/todo-example/todo-example.component';
import { UriService } from './services/uri.service';
import { TodoService } from './services/todo/todo.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CreateTodoDialogComponent } from './dialogs/create-todo-dialog/create-todo-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  entryComponents: [
    CreateTodoDialogComponent
  ],
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    DashboardComponent,
    IntroductionComponent,
    FlexLayoutComponent,
    TypografieComponent,
    TodoExampleComponent,
    CreateTodoDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCheckboxModule,
    FormsModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatCardModule,
    MatSnackBarModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
  ],
  providers: [
    WebClientService,
    UriService,
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
