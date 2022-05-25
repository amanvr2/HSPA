import { Component, OnInit,Input } from '@angular/core';
import { Property } from '../model/property';
import { PropertyBase } from '../model/propertyBase';


@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  constructor() { }

  @Input()
  props!: PropertyBase;

  @Input()
  hideIcons!: boolean;


  ngOnInit() {
  }

}
