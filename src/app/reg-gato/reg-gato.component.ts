import { Component, OnInit } from '@angular/core';
import * as moment from 'moment-timezone';
import { Observable } from 'rxjs';
import { PeticionesService } from '../../app/peticiones.service';


@Component({
  selector: 'app-reg-gato',
  templateUrl: './reg-gato.component.html',
  styleUrls: ['./reg-gato.component.css']
})

export class RegGatoComponent implements OnInit {
  offText:string="NO";
  onText:string="SÍ";
  esterilizado:boolean = false;
  chipeado:boolean = false;
  gatoTestado:boolean = false;

  fileToUpload: File = undefined;
  listaColonias:any = undefined;
  listaSexo:any = undefined;
  listaSituacion:any = undefined;
  datosUltimoGatoReg:any = undefined;
  listaClinicaVeterinarios:any = undefined;
  listaPositivos:any = undefined;

  datosGato:any={
    idGato:0,
    idColonia:undefined,
    idEsterilizacion:undefined,
    idChip:undefined,
    idSituacion:4,
    idSexo:undefined,
    idPositivo:undefined,
    nombreGato:undefined,
    imagenGato:undefined,
    peso:undefined,
    marcaEsterilizacion:undefined,
    caracteristicas:undefined,
    nacimientoGato:moment().tz("Europe/Madrid").format("YYYY-MM-DD HH:mm:ss"),
    fallecimientoGato:undefined
  };

  datosEsterilizacion:any={
    idEsterilizacion:0,
    idCentroVeterinario:undefined,
    fechaEsterilizacion:moment().tz("Europe/Madrid").format("YYYY-MM-DD HH:mm:ss")
  };

  datosChip:any={
    idChip:0,
    idClinicaVeterinario:undefined,
    numeroChip:undefined,
    fechaChip:moment().tz("Europe/Madrid").format("YYYY-MM-DD HH:mm:ss")
  };

  datosTest:any={
    idTest:0,
    idClinicaVeterinaria:undefined,
    idPositivo:undefined,
    idGato:undefined,
    fechaTest:moment().tz("Europe/Madrid").format("YYYY-MM-DD HH:mm:ss")
  };

  constructor(private dataService:PeticionesService) { }

  ngOnInit(): void {
    
    //peticiones para obtener datos de la BBDD para los select
    this.dataService.getUltimoGato().subscribe(resp=>{
      if(resp){
        this.datosUltimoGatoReg = resp[0]||undefined;
        this.datosGato.idGato=this.datosUltimoGatoReg.idGato + 1;
      }else{
        console.log(`No hay gato encontrado: ${resp}`);
      }
    });

    this.dataService.getPositivo().subscribe(resp=>{
      if(resp){
        this.listaPositivos = resp;
      }else{
        console.log(`No hay positivos encontrado: ${resp}`);
      }
    });

    this.dataService.getVeterinarios().subscribe(resp=>{
      if(resp){
        this.listaClinicaVeterinarios = resp;
      }else{
        console.log(`No hay clinicas encontradas: ${resp}`);
      }
    });

    //peticiones para obtener datos de la BBDD para los select
    this.dataService.getListaColonias().subscribe(resp=>{
      if(resp){
        this.listaColonias = resp;
      }else{
        console.log(`No hay colonias encontradas: ${resp}`);
      }
    });

    this.dataService.getSexoGatos().subscribe(resp=>{
      if(resp){
        this.listaSexo = resp;
      }else{
        console.log(`No hay sego de gatos: ${resp}`);
      }
    });

    this.dataService.getSituacion().subscribe(resp=>{
      if(resp){
        this.listaSituacion = resp;
      }else{
        console.log(`No hay sego de gatos: ${resp}`);
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
    }, false);
    
    reader.readAsDataURL(document.querySelector<HTMLInputElement>('input[type=file]').files[0]);
}

guardarDatosGato(datos:any):void{

  let tests:any={
    idResultadoTest:this.datosTest.idResultadoTest,
    idClinicaVeterinaria:this.datosTest.idClinicaVeterinaria,
    fechaTest:this.datosTest.fechaTest
  };
  
  let chip:any={
    idClinicaVeterinario:this.datosChip.idClinicaVeterinario,
    numeroChip:this.datosChip.numeroChip,
    fechaChip:this.datosChip.fechaChip
  };
  let esterilizacion:any={
    idCentroVeterinario:this.datosEsterilizacion.idCentroVeterinario,
    fechaEsterilizacion:this.datosEsterilizacion.fechaEsterilizacion
  };

  if(this.gatoTestado){
    console.log("Hay datos para el gato testado:",tests)
  }else{
    console.log("No hay datos para el gato testado")
  }

  if(this.chipeado){
    console.log("Hay datos para el chip del gato:",chip)
  }else{
    console.log("No hay datos para el chip del gato")
  }

  if(this.esterilizado){
    console.log("Hay datos para la esterilizacion del gato:",esterilizacion)
  }else{
    console.log("No hay datos para la esterilizacion del gato")
  }

  this.dataService.postRegistraGato(datos).subscribe(res=>{
   alert("Datos guardados!")
 },err=>{
   console.log("Error guardando los datos!");
  alert(`Error al guardar los datos: ${err}`);
});
}

onChange(event:any):void{
  console.log("Evento change:",event)
}
}
