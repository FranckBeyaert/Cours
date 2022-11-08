import { Component, OnInit } from '@angular/core';
import { ListFormation } from '../formation-mock';
import { Formation } from '../formation.model';
import { Router } from '@angular/router';
import { FormationService } from '../formation.service';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styles: [
  ]
})
export class FormationListComponent implements OnInit {
  // : => iniatilisé un type | = => pour affecter | syntaxe TypeScript
  formations : Formation[];
  formationSelected : Formation|undefined;
  msgErr : string ='';

  constructor(private router: Router, private formationService: FormationService)
  {

  }

  ngOnInit()
  {
    this.formations = this.formationService.getFormationList();
    console.table(this.formations);
    //this.selectFormation(this.formations[0]);
  }

  selectFormation(formation: string)
  {
    const index : number = Number(formation);
    this.formationSelected = this.formationService.getFormationById(index);
    if(!this.formationSelected)
    {
      this.msgErr = 'Formation non trouvée';
    }
    else
    {
      this.msgErr = '';
    }
    //console.log(`Vous avez choisie la formation ${this.formations[index].nom} d'une durée de ${this.formations[index].duree} jours`);
  }

  goToFormation(target: Formation)
  {
    this.router.navigate(['formations',target.id]);
  }

}
