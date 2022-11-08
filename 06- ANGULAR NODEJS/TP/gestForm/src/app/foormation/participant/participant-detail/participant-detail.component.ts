import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListParticipants } from '../participant.mock';
import { Participant } from '../participant.model';


@Component({
  selector: 'app-participant-detail',
  templateUrl: './participant-detail.component.html',
  styles: [
  ]
})
export class ParticipantDetailComponent implements OnInit {
  participants = ListParticipants;
  participant : Participant|undefined;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void 
  {
    const participantId = Number(this.route.snapshot.paramMap.get('id'));
    this.participant = this.participants.find(participant => participant.id == participantId);
  }

  goToParticipant()
  {
    this.router.navigate(['participants']);
  }

}
