import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgbCalendar, NgbDate, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-reg-recaudacion',
  templateUrl: './reg-recaudacion.component.html',
  styleUrls: ['./reg-recaudacion.component.css']
})
export class RegRecaudacionComponent implements OnInit {

  listaHuchas:any[];
  recaudacion:any={idHucha:null,calModel:null,cuantia:"0.0"};
  calModel: NgbDateStruct;

  constructor(private calendar: NgbCalendar,private httpClient: HttpClient) { }
  isDisabled = (date: NgbDate, current: {month: number, year: number}) => date.month !== current.month;
  isWeekend = (date: NgbDate) =>  this.calendar.getWeekday(date) >= 6;
  
  ngOnInit(): void {
    this.calModel = this.calendar.getToday();
    this.recaudacion.calModel = this.calModel;

    this.httpClient.get<any>("http://192.168.0.28:9876/huchas").subscribe((data)=>{
    //this.httpClient.get<any>("http://servidorvpnprivado.ddns.net:42001/huchas").subscribe((data)=>{
      this.listaHuchas=data||[];
    },(err)=>{
      console.log("Error obteniendo huchas:",err);
    });

  }

  guardarRecaudacion(recaudacion:any){
    let cuantia = recaudacion.cuantia.replace(",",".");
    let fecha = recaudacion.calModel.year+"-"+recaudacion.calModel.month+"-"+recaudacion.calModel.day;
    let datos:any = {
      idCuantia:0,
      idHucha:recaudacion.idHucha,
      fechaRecogida:fecha,
      cuantia:cuantia
    };

    this.httpClient.post<any>("http://192.168.0.28:9876/huchas/recaudacion", datos).subscribe(
    //this.httpClient.post<any>("http://servidorvpnprivado.ddns.net:42001/huchas/recaudacion", datos).subscribe(
      (res)=>{
              alert("Datos guardados!");
              },
      (err)=>{
        alert("Error guardando la cuantía:"+JSON.stringify(err));
      });
  };

}
