import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListeParticipants } from '../participant-mock';
import { Sexe } from '../participant-sexe-enum';
import { Participant } from '../participant.model';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styles: [
  ]
})
export class ParticipantListComponent implements OnInit {
  
  constructor(
    private router: Router,
    private participantSrv: ParticipantService) { }
  
  listeParticipants : Participant[];
  sexeEnum = Sexe;
  
  ngOnInit(): void {
    this.listeParticipants = this.participantSrv.getParticipants();
  }

  goToParticipant(participant: Participant){
    this.router.navigate(['participant',participant.id]);
  }

}
