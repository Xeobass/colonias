import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment-timezone';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-reg-gato',
  templateUrl: './reg-gato.component.html',
  styleUrls: ['./reg-gato.component.css']
})
export class RegGatoComponent implements OnInit {
  fileToUpload: File = null;
  listaColonias:any = null;
  datosGato:any={
    idGato:0,
    idColonia:null,
    idEsterilizacion:null,
    idChip:null,
    idSituacion:null,
    idSexo:null,
    idPositivo:null,
    nombreGato:null,
    imagenGato:null,
    peso:null,
    marcaEsterilizacion:null,
    caracteristicas:null,
    nacimientoGato:moment().tz("Europe/Madrid").format("YYYY-MM-DD HH:mm:ss"),
    fallecimientoGato:null
  };
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    
    //peticiones para obtener datos de la BBDD para los select
    this.httpClient.get(`http://192.168.0.28:9876/colonias`).subscribe(resp=>{
      if(resp){
        this.listaColonias = resp;
      }else{
        console.log(`No hay colonias encontradas: ${resp}`);
      }
    });
  }

handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    let preview:any = document.querySelector('img');
    let reader = new FileReader();
    let datosGatoAux:any = this.datosGato;

    reader.addEventListener("load", function () {
      // convert image file to base64 string
      preview.src=reader.result;
      datosGatoAux.imagenGato = reader.result; 
      datosGatoAux.imagenGato = datosGatoAux.imagenGato.replace(/^data:image\/[a-z]+;base64,/, "");
      //console.log("resultado:",reader.result);
    }, false);
    
    reader.readAsDataURL(document.querySelector<HTMLInputElement>('input[type=file]').files[0]);
    
}

guardarDatosGato(datos:any):void{
  this.httpClient.post<any>("http://192.168.0.28:9876/gatos", datos).subscribe(res=>{
   //console.log(res);
   console.log("Datos guardados!");
 },err=>{console.log("Error guardando los datos!")})
}

}
