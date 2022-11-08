import { Injectable } from '@angular/core';
import { ListParticipants } from './participant.mock';
import { Participant } from './participant.model';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor() { }

  getParticipantsList(): Participant[]
  {
    return ListParticipants
  }

  getParticiantById(ParticipantId: number): Participant|undefined
  {
    return ListParticipants.find(participant => participant.id === ParticipantId)
  }
}