import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Participant } from '../participant.model';
import { ListParticipants } from '../participant.mock';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styles: [
  ]
})
export class ParticipantListComponent implements OnInit {
  participants : Participant[];
  participantSelected : Participant|undefined;
  msgError: string = '';
  
  constructor(private router: Router, private participantServ: ParticipantService) { }

  ngOnInit(): void 
  {
    this.participants = this.participantServ.getParticipantsList();
    console.table(this.participants);
  }

  selectParticipant(participant: string)
  {
    const index : number = Number(participant)
    this.participantSelected = this.participantServ.getParticiantById(index);
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
