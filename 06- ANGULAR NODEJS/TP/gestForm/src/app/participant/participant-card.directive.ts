import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParticipantCard]'
})
export class ParticipantCardDirective {

  constructor(private el: ElementRef) 
  {
    this.setHeight(160);
    this.setBorder('black');
  }

  @HostListener('mouseenter') onMouseEnter()
  {
    this.setBorder('black');
    this.setBackgroundColor( '#E7ED27' );
  }

  @HostListener('mouseleave') onMouseLeave()
  {
    this.setBorder('black');
    this.setBackgroundColor('white');
  }

  setHeight(height: number) 
  {
    this.el.nativeElement.style.height = `$(height)px`;
  }

  setBorder(color: string)
  {
    this.el.nativeElement.style.border = `2px solid ${color}`;
  }

  setBackgroundColor(color: string)
  {
    this.el.nativeElement.style.background = `${color}`;
  }

}
