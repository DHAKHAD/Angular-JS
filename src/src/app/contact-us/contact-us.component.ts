import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  form=new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl('')
  })
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    window.location.reload();
  }
}