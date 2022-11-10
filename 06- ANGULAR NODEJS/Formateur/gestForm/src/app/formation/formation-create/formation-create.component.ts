import { Component, OnInit } from '@angular/core';
import { Formation } from '../formation.model';

@Component({
  selector: 'app-formation-create',
  template: `
  <h3 class="center">Nouvelle formation</h3>
  <app-formation-form [formation]="formation"></app-formation-form>
  `,
  styles: [
  ]
})
export class FormationCreateComponent implements OnInit  {
  formation: Formation = new Formation();
  
  ngOnInit(): void {
    this.formation.langages = [];
  }
}
