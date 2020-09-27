import { OnInit } from '@angular/core';
import { Component,TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {
  title = 'Colonias Canguesas';
  modalRef: BsModalRef;
  dataForm:any={name:'',pass:''};
  constructor(private modalService: BsModalService, private httpClient: HttpClient,private route: Router) {}
  ngOnInit(): void {
  }
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
 
  confirm(datosForm,template): void {
    this.modalRef.hide();
    this.httpClient.get(`http://192.168.0.28:9876/login?usrnombre=${datosForm.name}&usrpass=${datosForm.pass}`).subscribe(resp=>{
    if(resp==true){
      this.route.navigate(['inicio']);
    }else{
      console.log("Usuario incorrecto!");
      this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
    }
  });
  }
 
  decline(): void {
    this.modalRef.hide();
  }

  login():void{}
  
  showLoginForm(template: TemplateRef<any>):void{
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  cerrarNoUsuario():void{
    this.modalRef.hide();
  }


}

