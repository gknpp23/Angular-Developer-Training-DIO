import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() collapsed = false;

  navItems = [
    { icon: 'home', label: 'Início' },
    { icon: 'apps', label: 'Biblioteca' },
    { icon: 'groups', label: 'Comunidade' },
    { icon: 'store', label: 'Loja' },
    { icon: 'download', label: 'Downloads' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
