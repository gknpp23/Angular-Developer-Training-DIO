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
  constructor() { }

  ngOnInit(): void {
    
  }

}
