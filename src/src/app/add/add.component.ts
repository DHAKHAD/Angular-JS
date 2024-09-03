import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addRest=new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    contact: new FormControl(''),
    rating: new FormControl('')
  })
  constructor(private commonService:CommonService, private router:Router) { }
  ngOnInit(): void {
  }
  createRest(){
    this.commonService.addRest(this.addRest.value).subscribe((result)=>{
      this.addRest.reset();
      this.router.navigate(['list'])
    })
  }
}
