import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { TodoComponent } from './Components/todo/todo.component';
import { AddTodoComponent } from './Components/add-todo/add-todo.component';
import { TodoReducer } from './reducers/todo.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({todos:TodoReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
