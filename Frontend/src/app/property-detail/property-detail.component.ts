import { Component, OnInit } from '@angular/core';
import { GetAllPropertiesService } from '../service/getAllProperties.service';
import { Property } from '../model/property';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';


@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {



  property = new Property();

  public propertyId!: number;

  galleryOptions!: NgxGalleryOptions[];
  galleryImages!: NgxGalleryImage[];


  constructor(
    private getAllPropertiesService:GetAllPropertiesService,
    private route: ActivatedRoute,
    private location: Location,
    private router:Router
  ) {}



  getProperty():void{

    this.propertyId = Number(this.route.snapshot.paramMap.get('id'));

    //this.getAllPropertiesService.getSelected(this.id).subscribe(data => this.property = data);

    this.route.data.subscribe(
      (data: any) => {
        this.property = data['prp'];
      }
    );

    // this.route.params.subscribe(
    //   (params) => {
    //     this.propertyId = +params['id'];
    //     this.getAllPropertiesService.getProperty(this.propertyId).subscribe(
    //       (data: any) => {
    //         this.property = data;
    //       }, error=>this.router.navigate(['/'])
    //     );
    //   }
    // );
    this.galleryOptions = [
      {
        width: '100%',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: true
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/int1.jpg',
        medium: 'assets/images/int1.jpg',
        big: 'assets/images/int1.jpg'
      },
      {
        small: 'assets/images/int2.jpg',
        medium: 'assets/images/int2.jpg',
        big: 'assets/images/int2.jpg'
      },
      {
        small: 'assets/images/int3.jpg',
        medium: 'assets/images/int3.jpg',
        big: 'assets/images/int3.jpg'
      },
      {
        small: 'assets/images/int4.jpg',
        medium: 'assets/images/int4.jpg',
        big: 'assets/images/int4.jpg'
      },
      {
        small: 'assets/images/int5.jpg',
        medium: 'assets/images/int5.jpg',
        big: 'assets/images/int5.jpg'
      }
    ];


  }























  // onSelectNext(){

  //   this.propertyId+=1;
  //   this.router.navigate(['property-detail/'+this.propertyId]);


  // }




  ngOnInit(): void {
    this.getProperty();
  }

}
