import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//ng generate component main
import { MainComponent } from './main/main.component';
import { InitComponent } from './init/init.component';
import { RegGatoComponent } from './reg-gato/reg-gato.component';
import { RegHuchaComponent } from './reg-hucha/reg-hucha.component';
import { RegRecaudacionComponent } from './reg-recaudacion/reg-recaudacion.component';
import { GrafHuchasComponent } from './graf-huchas/graf-huchas.component';

const routes: Routes = [
  { path: 'inicio', component: MainComponent },
  { path: 'principal', component: InitComponent },
  { path: 'reg-gato', component: RegGatoComponent },
  { path: 'reg-hucha', component: RegHuchaComponent },
  { path: 'reg-recaudacion', component: RegRecaudacionComponent },
  { path: 'graf-huchas', component: GrafHuchasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
