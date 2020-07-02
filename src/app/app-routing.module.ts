import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareersListComponent } from './careers-list/careers-list.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'carreersList',component:CareersListComponent},
  {path:'',component:HomeComponent},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CareersListComponent]
