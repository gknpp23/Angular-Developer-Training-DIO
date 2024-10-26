import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card-special',
  templateUrl: './small-card-special.component.html',
  styleUrls: ['./small-card-special.component.css']
})
export class SmallCardSpecialComponent implements OnInit {
  @Input()  widthIfClosed: string | undefined;
  @Input() imageUrl: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
