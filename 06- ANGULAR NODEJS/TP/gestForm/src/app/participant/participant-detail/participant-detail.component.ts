import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListParticipants } from '../participant.mock';
import { Participant } from '../participant.model';
import { ParticipantService } from '../participant.service';


@Component({
  selector: 'app-participant-detail',
  templateUrl: './participant-detail.component.html',
  styles: [
  ]
})
export class ParticipantDetailComponent implements OnInit {
  participants : Participant[];
  participant : Participant|undefined;
  constructor(private router: Router, private route: ActivatedRoute, private participantServ : ParticipantService) { }

  ngOnInit(): void 
  {
    this.participants = this.participantServ.getParticipantsList();
    const participantId = Number(this.route.snapshot.paramMap.get('id'));
    this.participant = this.participantServ.getParticiantById(participantId)
  }

  goToParticipant()
  {
    this.router.navigate(['participants']);
  }

}
