import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  navbarOpen = false;
  collapsed = true;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  registroGatos():void{
    this.route.navigate(["reg-gato"]);
  }

  registroHucha():void{
    this.route.navigate(['reg-hucha']);
  };

  registroRecaudacion():void{
    this.route.navigate(['reg-recaudacion']);
  };

  graficarHuchas():void{
    this.route.navigate(['graf-huchas']);
  };

}
