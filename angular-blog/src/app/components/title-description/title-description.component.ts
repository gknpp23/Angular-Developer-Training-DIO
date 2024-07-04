import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-description',
  templateUrl: './title-description.component.html',
  
  //Uma folha de estilo para desktop e outra para responsividade
  styleUrls: 
  [
    './title-description.component.css',
    './title-description.component.responsive.css'
  ]
})
export class TitleDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
