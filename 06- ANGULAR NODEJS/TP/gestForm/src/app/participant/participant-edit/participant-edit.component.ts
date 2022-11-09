import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Participant } from '../participant.model';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-participant-edit',
  template: `
    <h3 class="center">Edit Participant</h3>
    <app-participant-form *ngIf="participant" [participant]="participant"></app-participant-form>
    <p *ngIf="!participant">Participant introuvable</p>
  `,
  styles: [
  ]
})
export class ParticipantEditComponent implements OnInit {
  participant: Participant|undefined;
  constructor(private route: ActivatedRoute, private participantServ: ParticipantService) { }

  ngOnInit(): void 
  {
    const participantId: number = Number(this.route.snapshot.paramMap.get('id'));
    if(participantId)
    {
      this.participant = this.participantServ.getParticiantById(participantId);
    }
    else
    {
      this.participant = undefined;
    }
  }

}
