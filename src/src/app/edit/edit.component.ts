import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  EditRest=new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    contact:new FormControl(''),
    rating:new FormControl('')
  })
  constructor(private commonService:CommonService, private router:Router,private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.commonService.getData(this.route.snapshot.params['id']).subscribe((result:any)=>{
      console.log(result)
      this.EditRest=new FormGroup({
        name: new FormControl(result['name']),
        address: new FormControl(result['address']),
        contact:new FormControl(result['contact']),
        rating:new FormControl(result['rating'])
      })
    })
  }
  editRest(){
    this.commonService.updateRest(this.route.snapshot.params['id'],this.EditRest.value).subscribe((res:any)=>{
    })
    this.router.navigate(['list']);
  }
  

}
