import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls:
  [
    './big-card.component.css',
    './big-card.component.responsive.css'
  ]
})
export class BigCardComponent implements OnInit {

  @Input() // Diretiva que torna a propriedade inputável
  photoCover: string = "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
  @Input()
  cardTitle: string = ""
  @Input()
  cardDescription: string = ""
  @Input()
  textLabel: string = ""
  
  constructor() { }

  ngOnInit(): void {
  }

}
