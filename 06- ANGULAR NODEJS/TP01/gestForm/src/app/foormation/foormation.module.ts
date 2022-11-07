import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationDetailComponent } from './formation-detail/formation-detail.component';
import { FormationListComponent } from './formation-list/formation-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormationCardDirective } from './formation-card.directive';
import { FormationLangagesPipe } from './formation-langages.pipe';
import { FormationImgDirective } from './formation-img.directive';

const formationroutes: Routes = 
[
  {path: 'formations', component: FormationListComponent},
  {path: 'formations/:id', component: FormationDetailComponent},
]

@NgModule({
  declarations: 
  [
    FormationListComponent,
    FormationDetailComponent,
    FormationCardDirective,
    FormationLangagesPipe,
    FormationImgDirective
  ],
  imports: 
  [
    CommonModule,
    RouterModule.forChild(formationroutes),
    
  ]
})
export class FoormationModule { }
