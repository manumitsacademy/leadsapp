import { Directive,ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShadowbox]'
})
export class ShadowboxDirective {

  constructor(public el:ElementRef,public rend:Renderer2) { }
  ngOnInit(){
    this.rend.setStyle(this.el.nativeElement,"box-shadow","2px 2px 12px #58A362")
  }

}
