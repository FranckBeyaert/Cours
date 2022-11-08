import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/app/foormation/formation.model';
import { FormationService } from 'src/app/foormation/formation.service';

@Component({
  selector: 'app-formation-form',
  templateUrl: './formation-form.component.html',
  styles: [
  ]
})
export class FormationFormComponent implements OnInit {
  @Input() formation: Formation; 
  langages: string[] = ['TypeScript', 'JavaScript', 'Html', 'Css', 'Php', 'Twig', 'JavaEE'];
  constructor(private formationSrv: FormationService, private router: Router) { }

  ngOnInit(): void 
  {
  }

  onSubmit()
  {
    if(this.formation.id == undefined)
    {
      this.formation.id = this.formationSrv.getFormationList().length+1;
      this.formationSrv.getFormationList().push(this.formation);
      this.router.navigate(['formations']);
    }
    else
    {
      this.router.navigate(['formations']);
    }
  }

  hasLangage(langage: string)
  {
    return this.formation.langages.includes(langage);
  }

  selectLangage(checked: string, langage: string)
  {
    const isChecked: boolean = Boolean(checked)
    if(isChecked)
    {
      if(!this.hasLangage(langage))
      {
        this.formation.langages.push(langage)
      }
      else
      {
        let index = this.formation.langages.indexOf(langage);
        this.formation.langages.splice(index, 1);
      }
    } 
  }


}
