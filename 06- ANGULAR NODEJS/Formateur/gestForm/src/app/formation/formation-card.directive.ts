import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFormationCard]'
})
export class FormationCardDirective {

  constructor(private el: ElementRef) {
    this.setHeigth(350);
    this.setBorder('black');
  }

  @Input('appFormationCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor ? this.borderColor : 'orange');
    this.setBackground('#E6E7E9');
  }

  @HostListener('mouseleave') OnMouseLeave(){    
    this.setBorder('black');
    this.setBackground('#ffff');
  }

  setHeigth(height : number){
    this.el.nativeElement.style.height  = `${height }px`;
  }

  setBorder(color: string){
    this.el.nativeElement.style.border = `4px solid ${color}`;
  }

  setBackground(color: string){
    this.el.nativeElement.style.background = color
  }

}
