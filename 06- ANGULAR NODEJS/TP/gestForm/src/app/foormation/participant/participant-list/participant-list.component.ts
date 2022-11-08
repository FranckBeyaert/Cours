import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Participant } from '../participant.model';
import { ListParticipants } from '../participant.mock';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styles: [
  ]
})
export class ParticipantListComponent implements OnInit {
  participants = ListParticipants;
  participantSelected : Participant|undefined;
  msgError: string = '';
  
  constructor(private router: Router) { }

  ngOnInit(): void 
  {
    console.table(this.participants);
  }

  selectParticipant(participant: string)
  {
    const index : number = Number(participant)
    this.participantSelected = this.participants.find(participant => participant.id == index)
    if(!this.participantSelected)
    {
      this.msgError = "Participant non trouvé"
    }
    else
    {
      this.msgError = ''
    }
  }

  goToParticipantList(target: Participant)
  {
    this.router.navigate(['participants', target.id])
  }

}
