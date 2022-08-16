import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindMyStuffComponent } from './find-my-stuff/find-my-stuff.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { TemplComponent } from './templ/templ.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: "full"},
  { path: 'table', component: TableComponent},
  { path: 'stuff', component: FindMyStuffComponent },
  { path: 'templ', component: TemplComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
