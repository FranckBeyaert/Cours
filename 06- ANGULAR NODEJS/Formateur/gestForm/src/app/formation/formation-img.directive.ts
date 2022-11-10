import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFormationImg]'
})
export class FormationImgDirective {

  private initialHeight : string = "90%";
  private initialWidth : string = "90%";
  private initialMargin : string = "5px";

  constructor(private el: ElementRef) {    
    this.setHeight(this.initialHeight);
    this.setWidth(this.initialWidth);
    this.setMargin(this.initialMargin);
   }

  setWidth(width: string){
    this.el.nativeElement.style.border = width;
  }

  setHeight(height: string){
    this.el.nativeElement.style.height = height;
  } 

  setMargin(margin: string){
    this.el.nativeElement.style.margin = margin;
  }

}
