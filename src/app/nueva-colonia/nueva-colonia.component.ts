import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../app/peticiones.service';

@Component({
  selector: 'app-nueva-colonia',
  templateUrl: './nueva-colonia.component.html',
  styleUrls: ['./nueva-colonia.component.css']
})
export class NuevaColoniaComponent implements OnInit {

  constructor (private dataService:PeticionesService) { }

  listaEstadosColonia:any[] = [];
  estado:any={
    nombreColonia:undefined,
    controlado:undefined
  };

  ngOnInit(): void {
    this.dataService.getEstadoColonias().subscribe((resp)=>{
      this.listaEstadosColonia = resp || [];
    });
  }

  guardarDatosColonia(datos){
    if(!datos.nombreColonia || !datos.controlado){
      alert("Los datos del formulario no están completos");
    }else{
      this.dataService.postRegistraColonia(datos).subscribe((resp)=>{
        if(resp.status != 500)
          alert(`Colonia ${datos.nombreColonia} registrada correctamente!`);
        else
          alert(`Error al guardaro los datos: ${resp.statusText}`)
      });
    }
  };
}
