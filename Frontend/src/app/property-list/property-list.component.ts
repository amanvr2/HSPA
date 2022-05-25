
import { Component, OnInit } from '@angular/core';
import { GetAllPropertiesService } from '../service/getAllProperties.service';
import { Property } from '../model/property';
import { ActivatedRoute } from '@angular/router';
import { PropertyBase } from '../model/propertyBase';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  SellRent = 1;
  property: PropertyBase[] = [];


  constructor(private getAllPropertiesService:GetAllPropertiesService, private route:ActivatedRoute) { }


  getProperties():void{

    if(this.route.snapshot.url.toString()){
      this.SellRent = 2;
    }

    this.getAllPropertiesService.getAllProperties(this.SellRent).subscribe(data=> {
      this.property=data
      const newProperty = JSON.parse(localStorage.getItem('newProp') as string);
      if(newProperty.sellrent === this.SellRent){

        this.property = [newProperty, ...this.property];
      }


    });

  }


  ngOnInit(): void {

    this.getProperties();
  }

}
