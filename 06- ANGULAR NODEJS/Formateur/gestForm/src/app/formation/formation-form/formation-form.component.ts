import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from '../formation.model';
import { FormationService } from '../formation.service';

@Component({
  selector: 'app-formation-form',
  templateUrl: './formation-form.component.html',
  styles: [
  ]
})
export class FormationFormComponent  {

  @Input() formation: Formation;

  langages : string[] = ['TypeScript','JavaScript','Html','Css','Php','Twig','JavaEE'];

  constructor(
    private formationSrv: FormationService,
    private router: Router
  ) { }

  onSubmit(){
    //creation
    if(this.formation.id == undefined){
      // this.formation.id = this.formationSrv.getFormationList().length+1
      // this.formationSrv.getFormationList().push(this.formation);
      this.router.navigate(['formations']);
    } else {
      //modification
      this.router.navigate(['formations']);
    }
  }

  hasLangage(langage: string): boolean{
    return this.formation.langages.includes(langage)
  }

  selectLangage(checkedElement: string, langage: string){
    const isChecked: boolean = Boolean(checkedElement);
    if(isChecked){
      if(!this.hasLangage(langage)){
        this.formation.langages.push(langage)
      } else {
        let index = this.formation.langages.indexOf(langage);
        this.formation.langages.splice(index, 1);
      }
    } 
  }

}
