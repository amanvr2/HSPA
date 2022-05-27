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

getAllProperties(SellRent?:number):Observable<Property[]>{

  return this.http.get("data/properties.json").pipe(
    map(data=>{

      const propertiesArray:Property[]=[];

      const localProperties = JSON.parse(localStorage.getItem('newProp') as string);

      if (localProperties) {
        for (const id in localProperties) {
          if(SellRent){
            if (localProperties.hasOwnProperty(id) && localProperties[id].sellrent === SellRent) {
              propertiesArray.push(localProperties[id]);
            }
          }
          else{
            propertiesArray.push(localProperties[id]);
          }
        }
      }

      for(const id in data){
        if (SellRent) {
        if(data.hasOwnProperty(id) && data[id].sellrent === SellRent){
          propertiesArray.push(data[id]);
        }
        }
        else{
          propertiesArray.push(data[id]);
        }
      }

      return propertiesArray;
    })
  );return this.http.get<Property[]>('data/properties.json');
}


getProperty(id: number) {
  return this.getAllProperties().pipe(
    map(propertiesArray => {
      //throw new Error('some error');
      return propertiesArray.find(p => p.id === id);
    })
  );
}


// getSelected(ids:number):Observable<PropertyBase[]>{

//   return this.http.get("data/properties.json").pipe(
//     map(data=>{

//       const propertiesArray:PropertyBase[]=[];
//       for(const id in data){
//         if(data.hasOwnProperty(id) && data[id].id === ids){
//           propertiesArray.push(data[id]);
//         }

//       }

//       return propertiesArray;
//     })
//   );
// }

addProperty(property: Property) {

  let newProp = [property];

  // Add new property in array if newProp alreay exists in local storage
  if (localStorage.getItem('newProp')) {
    newProp = [property, ...JSON.parse(localStorage.getItem('newProp') as string)];
  }

  localStorage.setItem('newProp', JSON.stringify(newProp));

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

