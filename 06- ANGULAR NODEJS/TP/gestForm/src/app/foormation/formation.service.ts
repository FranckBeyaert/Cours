import { Injectable } from '@angular/core';
import { ListFormation } from './formation-mock';
import { Formation } from './formation.model';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor() { }

  getFormationList(): Formation[] 
  {
    return ListFormation
  }

  getFormationById(formationId: number): Formation|undefined
  {
    return ListFormation.find(formation => formation.id ===formationId)
  }
}
