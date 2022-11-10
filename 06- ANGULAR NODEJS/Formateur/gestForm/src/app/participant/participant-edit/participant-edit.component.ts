import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Participant } from '../participant.model';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-participant-edit',
  template: `
  <h3 class="center">Modificaiton participant : {{ participant?.nom}}</h3>
   <app-participant-form *ngIf="participant" [participant]=participant></app-participant-form>
  `,
  styles: [
  ]
})
export class ParticipantEditComponent implements OnInit {
  participant : Participant|undefined;
  constructor(
    private participantSrv: ParticipantService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const participantId: number = Number(this.route.snapshot.paramMap.get('id'));
    if(participantId){      
      this.participant = this.participantSrv.getPaticipantById(participantId);
    } else {
      this.participant = undefined;
    }
  }
}
