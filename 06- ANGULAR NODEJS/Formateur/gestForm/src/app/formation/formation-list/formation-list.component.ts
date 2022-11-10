import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from '../formation.model';
import { FormationService } from '../formation.service';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styles: [
  ]
})
export class FormationListComponent implements OnInit {

  formations : Formation[];
  formationSelected : Formation|undefined;
  messageErr : string = '';

  constructor(
    private router: Router,
    private formationSrv: FormationService){}

  ngOnInit() {
    this.formations = this.formationSrv.getFormationList();
  }

  // selectFormation(formation: string){
  //   const index : number = Number(formation);
  //   this.formationSelected = this.formationSrv.getFormationById(index);

  //   if(!this.formationSelected){
  //     this.messageErr = 'Formation non trouvée';
  //   } else {
  //     this.messageErr = '';
  //   }
  // }

  goToFormation(formation: Formation){
    this.router.navigate(['formations',formation.id])
  }

}
