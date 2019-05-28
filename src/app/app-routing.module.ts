import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importam els components...
import { DashboardComponent }   from './dashboard/dashboard.component';
import { CiclistesComponent }      from './ciclistes/ciclistes.component';
import { CiclistaDetallComponent }  from './ciclista-detall/ciclista-detall.component';
 

// i cream les rutes...
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },  //La ruta per defecte de la app!
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detall/:id', component: CiclistaDetallComponent },
  { path: 'ciclistes', component: CiclistesComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {}
