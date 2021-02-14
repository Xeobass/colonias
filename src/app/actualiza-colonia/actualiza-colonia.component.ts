import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../app/peticiones.service';


@Component({
  selector: 'app-actualiza-colonia',
  templateUrl: './actualiza-colonia.component.html',
  styleUrls: ['./actualiza-colonia.component.css']
})
export class ActualizaColoniaComponent implements OnInit {

  listaColonias:any[]= undefined;
  coloniaParaActualizar:any = undefined;

  constructor(private dataService:PeticionesService) { }

  ngOnInit(): void {
    this.dataService.getListaColonias().subscribe((resp)=>{ this.listaColonias=resp;})
  }

}
