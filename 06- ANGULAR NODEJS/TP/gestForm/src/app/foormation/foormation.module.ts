import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationDetailComponent } from './formation-detail/formation-detail.component';
import { FormationListComponent } from './formation-list/formation-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormationCardDirective } from './formation-card.directive';
import { FormationLangagesPipe } from './formation-langages.pipe';
import { FormationImgDirective } from './formation-img.directive';
import { FormsModule } from '@angular/forms';
import { FormationCreateComponent } from '../formation/formation-create/formation-create.component';
import { FormationEditComponent } from '../formation/formation-edit/formation-edit.component';
import { FormationFormComponent } from '../formation/formation-form/formation-form.component';

const formationroutes: Routes = 
[
  {path: 'formations', component: FormationListComponent},
  {path: 'formations/:id', component: FormationDetailComponent},
  {path: 'newformation', component: FormationCreateComponent},
  {path: 'editformation/:id', component: FormationEditComponent}
]

@NgModule({
  declarations: 
  [
    FormationListComponent,
    FormationDetailComponent,
    FormationCardDirective,
    FormationLangagesPipe,
    FormationImgDirective,
    FormationCreateComponent,
    FormationEditComponent,
    FormationFormComponent
  ],
  imports: 
  [
    CommonModule,
    FormsModule,
    RouterModule.forChild(formationroutes),
    
  ]
})
export class FoormationModule { }
