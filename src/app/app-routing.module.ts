import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewComponent} from './new/new.component';
import {PreviewsComponent} from './previews/previews.component'
import { EnterComponent } from './enter/enter.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {path: '', redirectTo: '/projects', pathMatch: 'full'},
  {path: 'new', component: NewComponent},
  {path: 'projects', component: PreviewsComponent},
  {path: 'enter', component: EnterComponent},
  {path: 'project/:id', component: ProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
