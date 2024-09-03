import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  alert:boolean=false;
  email:string=''
  password:string=''
  constructor(private commonService:CommonService,private router:Router) { }
  ngOnInit(): void {
  }
  signin(){
    this.commonService.getUser().subscribe(res=>{
      const user=res.find((a:any) =>{
        return a.email=== this.email && a.password===this.password
      });
      if(user){
        console.log("signed in");
        this.router.navigate(['home']);
      }
      else{
        this.alert=true;
      }
    })
  }
  closeAlert(){
    this.alert=false;
  }
  goTosingup(){
    this.router.navigate(['signup']);
  }
}
