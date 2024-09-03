import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private commonService:CommonService,private router:Router) { }

  ngOnInit(): void {
  }
  goToList(){
    this.router.navigate(['list']);
  }
  goToAdd(){
    this.router.navigate(['add']);
  }
  goToHome(){
    this.router.navigate(['home']);
  }
  goToContactUs(){
    this.router.navigate(['contactus']);
  }
  logOut(){
    this.router.navigate(['signin']);
  }
}
