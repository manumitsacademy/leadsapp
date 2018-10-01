import { Component, OnInit,Input,OnChanges } from '@angular/core';

@Component({
  selector: 'app-homechild',
  templateUrl: './homechild.component.html',
  styleUrls: ['./homechild.component.css']
})
export class HomechildComponent implements OnInit,OnChanges {

  constructor() {
    console.log("child constructor")
   }
  @Input() x;
  y="manumits.com";
  ngOnInit() {
    console.log("child ngoninit")
  }

  ngOnChanges(){
    console.log("Home child On changes")
  }


}
