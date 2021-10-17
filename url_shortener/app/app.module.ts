import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TopbarComponent } from './topbar/topbar.component';
import {HttpClientModule} from '@angular/common/HTTP'
import { AddLinkComponent } from './add-link/add-link.component';
import { LinkListComponent } from './link-list/link-list.component';
import { CardComponent } from './card/card.component';
import { ChartComponent } from './chart/chart.component';
import { Topbar1Component } from './topbar1/topbar1.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    TopbarComponent,
    AddLinkComponent,
    LinkListComponent,
    CardComponent,
    ChartComponent,
    Topbar1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
