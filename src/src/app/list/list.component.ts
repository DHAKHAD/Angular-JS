import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  collection:any
  constructor(private commonService:CommonService, private router:Router) { }

  ngOnInit(): void {
    this.commonService.getRest().subscribe((result)=>{
      console.log(result)
      this.collection=result;
    });
  }
  deleteRest(id: any){
    this.collection.splice();
    this.commonService.deleteRest(id).subscribe((result)=>{
    });
    location.reload();
  }
  goToAdd(){
    this.router.navigate(['add']);
  }

}
