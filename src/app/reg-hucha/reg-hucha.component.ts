import { Component, OnInit } from '@angular/core';
import {NgbCalendar, NgbDate, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { PeticionesService } from '../../app/peticiones.service';



@Component({
  selector: 'app-reg-hucha',
  templateUrl: './reg-hucha.component.html',
  styleUrls: ['./reg-hucha.component.css']
})

export class RegHuchaComponent implements OnInit {
  calModel: NgbDateStruct;
  fechaRetirada:NgbDateStruct;
  calDate: {year: number, month: number};
  nombreInstalacion:string;

  constructor(private calendar: NgbCalendar,private dataService:PeticionesService) { }

  isDisabled = (date: NgbDate, current: {month: number, year: number}) => date.month !== current.month;
  isWeekend = (date: NgbDate) =>  this.calendar.getWeekday(date) >= 6;

  ngOnInit(): void {
    this.calModel = this.calendar.getToday();
    //this.fechaRetirada= this.calendar.getToday();
  }

 
 
  guardarHucha(nombreInstalacion:any,calModel:any,fechaRetirada:any):void{
    let datos:any={
      idHucha:null,
      lugarHucha:nombreInstalacion.toUpperCase(),
      fechaInstalacion:this.calModel.year+"-"+this.calModel.month+"-"+this.calModel.day
    };

    this.dataService.getHuchas(datos).subscribe(
      (res)=>{
              alert("Datos guardados!");
              },
      (err)=>{
        alert("Error guardando la hucha:"+JSON.stringify(err));
      });
    
    console.log("guardar:",datos);
  }

}
