import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formation } from 'src/app/foormation/formation.model';
import { FormationService } from 'src/app/foormation/formation.service';

@Component({
  selector: 'app-formation-edit',
  template: `
    <h3 class="center">Modification Formation</h3>
    <app-formation-form *ngIf="formation" [formation]="formation"></app-formation-form>
    <p *ngIf="!formation">Formation introuvable</p>
  `,
  styles: [
  ]
})
export class FormationEditComponent implements OnInit {
  formation: Formation|undefined;
  constructor(private formationSrv: FormationService, private route: ActivatedRoute) { }

  ngOnInit(): void 
  {
    const formationId: number = Number(this.route.snapshot.paramMap.get('id'));
    if(formationId)
    {
      this.formation = this.formationSrv.getFormationById(formationId);
    }
    else
    {
      this.formation = undefined;
    }
  }

}
