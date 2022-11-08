import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListFormation } from '../formation-mock';
import { Formation } from '../formation.model';
import { FormationService } from '../formation.service';

@Component({
  selector: 'app-formation-detail',
  templateUrl: './formation-detail.component.html',
  styles: [
  ]
})
export class FormationDetailComponent implements OnInit {
  formations : Formation[]
  formation: Formation|undefined
  constructor(private router: Router, private route: ActivatedRoute, private formationService: FormationService) {}

  ngOnInit(): void 
  {
    this.formations = this.formationService.getFormationList();
    const formationId = Number(this.route.snapshot.paramMap.get('id'));
    this.formation = this.formationService.getFormationById(formationId);
  }

  goToFormation()
  {
    this.router.navigate(['formations']);
  }

  goToEditFormation(formation: Formation)
  {
    this.router.navigate(['editformation',formation.id]);
  }

}
