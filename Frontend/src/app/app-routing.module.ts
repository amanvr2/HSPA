import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyCardComponent } from './property-card/property-card.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

const routes: Routes = [
  {path:"",component:PropertyListComponent},
  {path:"rent-property",component:PropertyListComponent},
  {path:"add-property", component:AddPropertyComponent},
  {path:"property-detail/:id",component:PropertyDetailComponent},
  {path:"register",component:UserRegisterComponent},
  {path:"login",component:UserLoginComponent},
  {path:"**",component:PropertyListComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
