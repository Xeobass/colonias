import { Component,TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { PeticionesService } from '../../app/peticiones.service';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})

export class InitComponent {
  title = 'Colonias Canguesas';
  modalRef: BsModalRef;
  dataForm:any={name:'',pass:''};
  constructor(private modalService: BsModalService,private route: Router,private dataService:PeticionesService) {}
 
  //apertura de modals
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
 
  //realiza una query para obtención del usuario
  confirm(datosForm,template): void {
    this.modalRef.hide();
    this.dataService.login(datosForm.name,datosForm.pass).subscribe(resp=>{
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
  
  //muestra el modal con el login
  showLoginForm(template: TemplateRef<any>):void{
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  cerrarNoUsuario():void{
    this.modalRef.hide();
  }


}

