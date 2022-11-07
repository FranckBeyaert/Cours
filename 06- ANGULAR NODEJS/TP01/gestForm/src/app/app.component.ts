import { Component, OnInit } from '@angular/core';
import { ListFormation } from './formation-mock';
import { Formation } from './formation.model';

@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`,
  styles: []
})
export class AppComponent implements OnInit {
  formations = ListFormation;

  ngOnInit()
  {
    console.table(this.formations);
    this.selectFormation(this.formations[0]);
  }

  selectFormation(formation: Formation)
  {
    console.log('Vous avez choisie la formation ${formations.nom}');
  }
  
}
