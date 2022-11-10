import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sexe } from '../participant-sexe-enum';
import { Participant } from '../participant.model';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-participant-form',
  templateUrl: './participant-form.component.html',
  styles: [
  ]
})
export class ParticipantFormComponent {
  sexeEnum = Sexe;
  @Input() participant: Participant;

  constructor(
    private participantSrv: ParticipantService,
    private router: Router,
  ) { }

    setSexeParticipant(sexe: string){
      console.log(sexe);
    }

  onSubmit(){
    if(this.participant.id == undefined){
      this.participant.id = this.participantSrv.getParticipants().length+1;
      this.participantSrv.getParticipants().push(this.participant)
      this.router.navigate(['participants',]);
    } else {
      this.router.navigate(['participant',this.participant.id]);
    }
  }

}
