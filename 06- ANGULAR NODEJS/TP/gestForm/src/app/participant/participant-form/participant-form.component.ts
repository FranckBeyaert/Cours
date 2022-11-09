import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Participant } from '../participant.model';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-participant-form',
  templateUrl: './participant-form.component.html',
  styles: [
  ]
})
export class ParticipantFormComponent implements OnInit {
  @Input() participant: Participant;
  constructor(private participantSrv: ParticipantService, private router: Router) { }

  ngOnInit(): void {}

  onSubmit()
  {
    if(this.participant.id == undefined)
    {
      this.participant.id = this.participantSrv.getParticipantsList().length+1;
      this.participantSrv.getParticipantsList().push(this.participant);
      this.router.navigate(['participants']);
    }
    else
    {
      this.router.navigate(['participants']);
    }
  }
}
