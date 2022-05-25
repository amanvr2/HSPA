import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Property } from '../model/property';
import { Observable,of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PropertyBase } from '../model/propertyBase';


@Injectable({
  providedIn: 'root'
})
export class GetAllPropertiesService {

constructor(private http:HttpClient) { }

getAllProperties(SellRent:number):Observable<PropertyBase[]>{

  return this.http.get("data/properties.json").pipe(
    map(data=>{

      const propertiesArray:PropertyBase[]=[];
      for(const id in data){
        if(data.hasOwnProperty(id) && data[id].sellrent === SellRent){
          propertiesArray.push(data[id]);
        }

      }

      return propertiesArray;
    })
  );
}


getSelected(ids:number):Observable<PropertyBase[]>{

  return this.http.get("data/properties.json").pipe(
    map(data=>{

      const propertiesArray:PropertyBase[]=[];
      for(const id in data){
        if(data.hasOwnProperty(id) && data[id].id === ids){
          propertiesArray.push(data[id]);
        }

      }

      return propertiesArray;
    })
  );
}

addProperty(property: Property) {


  let properties=[];
  if(localStorage.getItem('newProp')){

    properties = JSON.parse(localStorage.getItem('newProp') as string);
    properties = [property, ...properties];

  }
  else{
    properties = [property];
  }

  localStorage.setItem('newProp', JSON.stringify(properties));

}

newPropID() {
  if (localStorage.getItem('PID')) {
    localStorage.setItem('PID', String(+localStorage.getItem('PID')! + 1));
    return +localStorage.getItem('PID')!;
  } else {
    localStorage.setItem('PID', '101');
    return 101;
  }
}



}

