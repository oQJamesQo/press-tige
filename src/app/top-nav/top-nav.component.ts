import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopnavComponent implements OnInit {
  isNavbarCollapsed = true;
  constructor() { }
  ngOnInit() { }
}
