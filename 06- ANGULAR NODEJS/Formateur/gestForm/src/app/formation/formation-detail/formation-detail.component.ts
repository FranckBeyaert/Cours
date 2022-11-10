import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from '../formation.model';
import { FormationService } from '../formation.service';

@Component({
  selector: 'app-formation-detail',
  templateUrl: './formation-detail.component.html',
  styles: [
  ]
})
export class FormationDetailComponent implements OnInit {

  formation: Formation|undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formationSrv: FormationService   
    ) { }

  ngOnInit(): void {
    const formationId = Number(this.route.snapshot.paramMap.get('id'));
    this.formation = this.formationSrv.getFormationById(formationId);
  }

  goToFormationList(){
    this.router.navigate(['formations']);
  }

  goToEditFormation(formation: Formation){
    this.router.navigate(['editformation',formation.id]);
  }

}
