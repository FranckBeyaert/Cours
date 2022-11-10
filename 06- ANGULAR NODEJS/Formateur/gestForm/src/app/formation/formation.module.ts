import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormationListComponent } from './formation-list/formation-list.component';
import { FormationDetailComponent } from './formation-detail/formation-detail.component';
import { FormationCardDirective } from './formation-card.directive';
import { FormationLangagesPipe } from './formation-langages.pipe';
import { FormationImgDirective } from './formation-img.directive';
import { FormsModule } from '@angular/forms';
import { FormationFormComponent } from './formation-form/formation-form.component';
import { FormationCreateComponent } from './formation-create/formation-create.component';
import { FormationEditComponent } from './formation-edit/formation-edit.component';
import { AuthGuard } from '../auth.guard';


const formationroutes: Routes = [
  { path: 'formations', component: FormationListComponent, canActivate: [AuthGuard] },
  { path: 'formations/:id', component: FormationDetailComponent, canActivate: [AuthGuard] },
  { path: 'newformation', component: FormationCreateComponent, canActivate: [AuthGuard]},
  { path: 'editformation/:id', component: FormationEditComponent, canActivate: [AuthGuard]}
];


@NgModule({
  declarations: [
    FormationListComponent,
    FormationDetailComponent,
    FormationCardDirective,
    FormationImgDirective,
    FormationLangagesPipe,
    FormationFormComponent,
    FormationCreateComponent,
    FormationEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(formationroutes)
  ]
})
export class FormationModule { }
