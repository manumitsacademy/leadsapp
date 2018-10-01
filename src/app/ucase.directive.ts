import { Directive,ElementRef,Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[appUcase]'
})
export class UcaseDirective {

  constructor(public el:ElementRef,public rend:Renderer2 ) { }
  @HostListener('blur')
  onblur(){
    var x = this.el.nativeElement;
    console.log(x.value.toUpperCase())
    this.rend.setProperty(this.el.nativeElement,"value",x.value.toUpperCase())
  }
}
