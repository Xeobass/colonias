import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//ng generate component main
import { MainComponent } from './main/main.component';
import { InitComponent } from './init/init.component';
import { RegGatoComponent } from './reg-gato/reg-gato.component';
import { RegHuchaComponent } from './reg-hucha/reg-hucha.component';
import { RegRecaudacionComponent } from './reg-recaudacion/reg-recaudacion.component';
import { GrafHuchasComponent } from './graf-huchas/graf-huchas.component';
import { NuevaColoniaComponent } from './nueva-colonia/nueva-colonia.component';
import { ActualizaColoniaComponent } from './actualiza-colonia/actualiza-colonia.component';
import { MuestraDatosColoniaComponent } from './muestra-datos-colonia/muestra-datos-colonia.component';

const routes: Routes = [
  { path: 'inicio', component: MainComponent },
  { path: 'principal', component: InitComponent },
  { path: 'reg-gato', component: RegGatoComponent },
  { path: 'reg-hucha', component: RegHuchaComponent },
  { path: 'reg-recaudacion', component: RegRecaudacionComponent },
  { path: 'graf-huchas', component: GrafHuchasComponent },
  { path: 'nueva-colonia', component: NuevaColoniaComponent },
  { path: 'actualiza-colonia', component: ActualizaColoniaComponent },
  { path: 'muestra-colonia', component: MuestraDatosColoniaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
