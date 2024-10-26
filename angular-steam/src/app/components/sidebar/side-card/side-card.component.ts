import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-card',
  templateUrl: './side-card.component.html',
  styleUrls: ['./side-card.component.css']
})
export class SideCardComponent implements OnInit {
  @ViewChild('sidenav')
  sidenav!: MatSidenav;
  
  // Propriedade que controla o estilo do container principal
  isSidenavOpen: boolean = true;
   

  toggleSidenav() {
    this.sidenav.toggle();
    this.isSidenavOpen = !this.isSidenavOpen; // Atualizar estado da sidebar
  }
  
  getWidth(){
    return this.isSidenavOpen ? '17.25vw' : '20vw';
  }

 // definição das imagens das ofertas especiais
  currentImageUrlCard01: string = 'https://raw.githubusercontent.com/gknpp23/Angular-Developer-Training-DIO/refs/heads/main/angular-steam/no-man-s-sky-indie-cke.webp'
  currentImageUrlCard02: string = 'https://raw.githubusercontent.com/gknpp23/Angular-Developer-Training-DIO/refs/heads/main/angular-steam/cuphead.jpg'
  currentImageUrlCard03: string = 'https://github.com/gknpp23/Angular-Developer-Training-DIO/blob/main/angular-steam/among-us_8kks.jpg?raw=true'
  currentImageUrlCard04: string = 'https://github.com/gknpp23/Angular-Developer-Training-DIO/blob/main/angular-steam/sgp_inside_review_capa.jpg?raw=true';


  constructor() { }

  ngOnInit(): void {
    
  }

}
