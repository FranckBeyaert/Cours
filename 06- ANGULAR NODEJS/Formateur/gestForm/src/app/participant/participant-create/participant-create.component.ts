import { Component, OnInit } from '@angular/core';
import { Participant } from '../participant.model';

@Component({
  selector: 'app-participant-create',
  template: `
  <h3 class="center">Nouveau participant </h3>
  <app-participant-form [participant]=participant></app-participant-form>
  `,
  styles: [
  ]
})
export class ParticipantCreateComponent {

  participant : Participant = new Participant();

}
