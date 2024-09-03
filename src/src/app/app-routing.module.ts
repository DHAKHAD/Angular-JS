import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:'signin',pathMatch:'full'},
  {component:HomeComponent,path:'home'},
  {component:SignupComponent,path:'signup'},
  {component:SigninComponent,path:'signin'},
  {component:ListComponent,path:'list'},
  {component:AddComponent,path:'add'},
  {component:ContactUsComponent,path:'contactus'},
  {component:EditComponent,path:'edit/:id'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
