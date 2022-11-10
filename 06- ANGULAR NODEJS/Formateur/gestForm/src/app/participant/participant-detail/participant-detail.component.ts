import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListeParticipants } from '../participant-mock';
import { Sexe } from '../participant-sexe-enum';
import { Participant } from '../participant.model';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-participant-detail',
  templateUrl: './participant-detail.component.html',
  styles: [
  ]
})
export class ParticipantDetailComponent implements OnInit {
  sexeEnum = Sexe;
  participant: Participant|undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private participantSrv: ParticipantService
    ) { }

  ngOnInit() {
    const participantId: number = Number(this.route.snapshot.paramMap.get('id'));
    this.participant = this.participantSrv.getPaticipantById(participantId);
  }

  goToParticipantList(){
    this.router.navigate(['participants'])
  }
  goToParticipantToEdit(participant: Participant){
    this.router.navigate(['edit-participant',participant.id]);
  }

}
