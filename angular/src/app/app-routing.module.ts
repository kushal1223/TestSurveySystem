import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TakeComponent } from './take/take.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'todo/:id', component: TodoComponent},
  {path : 'create/:id', component: CreateComponent},
  {path : 'take/:id', component: TakeComponent},
  {path : 'edit/:id', component: EditComponent},
  {path : 'grade/:id', component: EditComponent},
  {path : '**', component: NotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
