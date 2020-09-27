import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//ng generate component main
import { MainComponent } from './main/main.component';
import { InitComponent } from './init/init.component';
import { RegGatoComponent } from './reg-gato/reg-gato.component';

const routes: Routes = [
  { path: 'inicio', component: MainComponent },
  { path: 'principal', component: InitComponent },
  { path: 'reg-gato', component: RegGatoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
