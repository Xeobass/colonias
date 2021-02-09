import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
//import * as moment from 'moment';
 
 
@Injectable({
  providedIn: 'root'
})
 
export class PeticionesService {
 
    private REST_API_SERVER = "http://192.168.0.28:9876";
    
    constructor(private httpClient: HttpClient) { }
   
    //peticion con los datos del usuario
    login(usr:string,pss:string){
        return this.httpClient.get(`${this.REST_API_SERVER}/login?usrnombre=${usr}&usrpass=${pss}`);
    }

    getHuchas(datos:any){
      return this.httpClient.get<any>("http://192.168.0.28:9876/huchas", datos);
    }

    getUltimoGato(){
      return this.httpClient.get<any>("http://192.168.0.28:9876/ultimogato");
    }
    getPositivo(){
      return this.httpClient.get<any>("http://192.168.0.28:9876/positivo");
    }

    getVeterinarios(){
      return this.httpClient.get<any>("http://192.168.0.28:9876/veterinarios");
    }

    getListaColonias(){
      return this.httpClient.get<any>("http://192.168.0.28:9876/colonias");
    }

    getSexoGatos(){
      return this.httpClient.get<any>("http://192.168.0.28:9876/sexogatos");
    }

    getSituacion(){
      return this.httpClient.get<any>("http://192.168.0.28:9876/situacion");
    }

    postRegistraGato(datos:any){
      return this.httpClient.post<any>("http://192.168.0.28:9876/gatos", datos);
    }




  }
  