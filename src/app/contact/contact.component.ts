import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public fb:FormBuilder,public http:HttpClient) { }

  ngOnInit() {
  }
  url="https://api.mlab.com/api/1/databases/manumits/collections/leads?apiKey=T6l9KCdyv6Tiln2BOaWH6JunoE9GcDOy";
  contactForm= this.fb.group({
    fullname:["",[Validators.required]],
    mobilenumber:["",[Validators.required]],
    emailid:["",[Validators.required]],
    location:["",[Validators.required]],
    contact_date:new Date(),
    remarks:[]
  });
  send(){
    this.http.post(this.url,this.contactForm.value).subscribe((x)=>{console.log(x)})
  }
}
