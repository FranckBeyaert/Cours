import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Sexe } from '../participant-sexe-enum';

@Directive({
  selector: '[participantSexe]'
})
export class ParticipantSexeDirective implements OnInit {

  @Input('participantSexe') sexe: Sexe;


  constructor(private el: ElementRef) {
  }
  ngOnInit(): void {
    if(this.sexe == Sexe.homme){
      this.el.nativeElement.style.color = 'blue';
    } else {
      this.el.nativeElement.style.color = 'red';
    }
  }


}
