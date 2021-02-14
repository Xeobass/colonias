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
      return this.httpClient.get<any>(`${this.REST_API_SERVER}/huchas`, datos);
    }

    getUltimoGato(){
      return this.httpClient.get<any>(`${this.REST_API_SERVER}/ultimogato`);
    }
    getPositivo(){
      return this.httpClient.get<any>(`${this.REST_API_SERVER}/positivo`);
    }

    getVeterinarios(){
      return this.httpClient.get<any>(`${this.REST_API_SERVER}/veterinarios`);
    }

    getListaColonias(){
      return this.httpClient.get<any>(`${this.REST_API_SERVER}/colonias`);
    }

    getSexoGatos(){
      return this.httpClient.get<any>(`${this.REST_API_SERVER}/sexogatos`);
    }

    getSituacion(){
      return this.httpClient.get<any>(`${this.REST_API_SERVER}/situacion`);
    }
    getEstadoColonias(){
      return this.httpClient.get<any>(`${this.REST_API_SERVER}/estadosColonias`);
    }

    postRegistraGato(datos:any){
      return this.httpClient.post<any>(`${this.REST_API_SERVER}/gatos`, datos);
    }

    postRegistraColonia(datos:any){
      return this.httpClient.post<any>(`${this.REST_API_SERVER}/nuevacolonia`, datos);
    }




  }
  