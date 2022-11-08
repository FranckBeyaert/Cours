import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListFormation } from '../formation-mock';
import { Formation } from '../formation.model';

@Component({
  selector: 'app-formation-detail',
  templateUrl: './formation-detail.component.html',
  styles: [
  ]
})
export class FormationDetailComponent implements OnInit {

  formations = ListFormation;
  formation: Formation|undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute    
    ) { }

  ngOnInit(): void {
    const formationId = Number(this.route.snapshot.paramMap.get('id'));
    this.formation = this.formations.find(formation => formation.id == formationId);
  }

  goToFormationList(){
    this.router.navigate(['formations']);
  }

}
