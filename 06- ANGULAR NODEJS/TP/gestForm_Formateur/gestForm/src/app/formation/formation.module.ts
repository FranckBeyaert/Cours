import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormationListComponent } from './formation-list/formation-list.component';
import { FormationDetailComponent } from './formation-detail/formation-detail.component';
import { FormationCardDirective } from './formation-card.directive';
import { FormationLangagesPipe } from './formation-langages.pipe';
import { FormationImgDirective } from './formation-img.directive';

const formationroutes: Routes = [
  { path: 'formations', component: FormationListComponent },
  { path: 'formations/:id', component: FormationDetailComponent },
];


@NgModule({
  declarations: [
    FormationListComponent,
    FormationDetailComponent,
    FormationCardDirective,
    FormationImgDirective,
    FormationLangagesPipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(formationroutes)
  ]
})
export class FormationModule { }
