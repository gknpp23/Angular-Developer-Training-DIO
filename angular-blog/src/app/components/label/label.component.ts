import { Component,HostBinding,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls:
  [
    './label.component.css',
    './label.component.responsive.css'

  ]
})
export class LabelComponent implements OnInit {
  @Input()
  textLabel: string = ""
  @Input()
  bgColorLabel: string = ""

  
  constructor() { }
  

  ngOnInit(): void {
  }

}
