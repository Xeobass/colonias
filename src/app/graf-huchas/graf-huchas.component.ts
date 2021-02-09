import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label, Color } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment-timezone';


@Component({
  selector: 'app-graf-huchas',
  templateUrl: './graf-huchas.component.html',
  styleUrls: ['./graf-huchas.component.css']
})
export class GrafHuchasComponent implements OnInit {
  public barChartColors: Color[] = [
    { backgroundColor: 'lightblue' }
  ]
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}],
      yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [{data:[], label:'Recaudado'}];

  listaHuchas:any[];
  huchaGraf:any={};
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    //obtener lista de huchas
    this.httpClient.get<any>("http://192.168.0.28:9876/huchas").subscribe((data)=>{
    //this.httpClient.get<any>("http://servidorvpnprivado.ddns.net:42001/huchas").subscribe((data)=>{
      this.listaHuchas=data||[];
    },(err)=>{
      console.log("Error obteniendo huchas:",err);
    });

  }


  verGrafica(centro:number):void{
    console.log("Centro:",centro);
    this.httpClient.get<any>(`http://192.168.0.28:9876/huchas/${centro}`).subscribe((data:any[])=>{
    //this.httpClient.get<any>(`http://servidorvpnprivado.ddns.net:42001/huchas/${centro}`).subscribe((data:any[])=>{
      console.log("Datos obtenidos:",data);
      
      this.barChartLabels = [];
      this.barChartData = [];
      let arrayDatos:any[]=[];

      data.forEach(valor=>{
        this.barChartLabels.push(moment(valor.fechaRecogida).format("YYYY-MM-DD"));
        arrayDatos.push(parseFloat(valor.cuantia))
      });

      this.barChartData=[{data:arrayDatos, label:'Recaudado'}];

    },(err)=>{
      console.log("Error obteniendo huchas:",err);
      alert("No hay datos para mostrar.")
      let arrayDatos:any[]=[];
      this.barChartLabels = [];
      this.barChartData = [];
      this.barChartData=[{data:arrayDatos, label:'Recaudado'}];
    });
  }

}
