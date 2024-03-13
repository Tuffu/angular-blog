import { Component, Input, OnInit, } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover:string=""
  @Input()
  cardTitle:string="Saiu uma nova versão do angular"

  constructor() { }

  ngOnInit(): void {
  }

}
