import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListFormation } from '../formation-mock';
import { Formation } from '../formation.model';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styles: [
  ]
})
export class FormationListComponent implements OnInit {

  formations = ListFormation;
  formationSelected : Formation|undefined;
  messageErr : string = '';

  constructor(private router: Router){}

  ngOnInit() {
   console.table(this.formations);
  }

  selectFormation(formation: string){
    const index : number = Number(formation);
    this.formationSelected = this.formations.find(formation => formation.id == index);

    if(!this.formationSelected){
      this.messageErr = 'Formation non trouvée';
    } else {
      this.messageErr = '';
    }
  }

  goToFormation(formation: Formation){
    this.router.navigate(['formations',formation.id])
  }

}
