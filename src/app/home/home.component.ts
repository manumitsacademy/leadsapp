import { Component, OnInit,DoCheck,OnChanges,AfterViewInit,ViewChild,AfterContentChecked } from '@angular/core';
import { HomechildComponent } from '../homechild/homechild.component';
import { ShadowboxDirective } from '.././shadowbox.directive';
import { UcaseDirective } from '.././ucase.directive';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnChanges,AfterViewInit {

    @ViewChild(HomechildComponent) hc:HomechildComponent;
  constructor() { }
  abc="it solutions";
  ngOnInit() {
  }
  /*ngDoCheck(){
    console.log("OKOK")
  }*/
  ngOnChanges(){
    console.log("changes")
  }
  ngAfterViewInit(){
    console.log("Child Loaded--afterviewinit",this.hc)
  }
  ngAfterViewChecked(){
    console.log("Child Loaded--afterviewchecked",this.hc)
  }
}
