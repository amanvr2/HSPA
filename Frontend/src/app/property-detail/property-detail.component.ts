import { Component, OnInit } from '@angular/core';
import { GetAllPropertiesService } from '../service/getAllProperties.service';
import { Property } from '../model/property';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { PropertyBase } from '../model/propertyBase';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  property:PropertyBase[]=[];

  id!: number;


  constructor(
    private getAllPropertiesService:GetAllPropertiesService,
    private route: ActivatedRoute,
    private location: Location,
    private router:Router
  ) {}



  getProperty(){
    this.id = Number(this.route.snapshot.paramMap.get('id'));



    // this.getAllPropertiesService.getSelected(this.id).subscribe(data => this.property = data);

    this.route.params.subscribe(
      (params)=>{

        this.id = Number(params['id']);
      }
    )


  }

  onSelectNext(){

    this.id+=1;
    this.router.navigate(['property-detail/'+this.id]);


  }




  ngOnInit(): void {
    this.getProperty();
  }

}
