import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupInfo=new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    address: new FormControl('')
})
  constructor(private commonService:CommonService, private router:Router) { }

  ngOnInit(): void {
  }
  signup(){
    this.commonService.signup(this.signupInfo.value).subscribe((result)=>{
      console.log("registered")
      this.router.navigate(['signin']);
    })
  }
  goTosingin(){
    this.router.navigate(['signin']);
  }

}
