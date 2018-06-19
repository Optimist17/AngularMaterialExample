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

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    DashboardComponent,
    IntroductionComponent,
    FlexLayoutComponent,
    TypografieComponent
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
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
