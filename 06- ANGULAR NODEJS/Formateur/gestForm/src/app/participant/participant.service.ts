import { Injectable } from '@angular/core';
import { ListeParticipants } from './participant-mock';
import { Participant } from './participant.model';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor() { }

  getParticipants(): Participant[]{
    return ListeParticipants;
  }

  getPaticipantById(participantId: number): Participant|undefined {
    return ListeParticipants.find(participant => participant.id == participantId);
  }
}
