import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { ParticipantDetailComponent } from './participant-detail/participant-detail.component';
import { ParticipantSexeDirective } from './participant-list/participant-sexe.directive';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ParticipantFormComponent } from './participant-form/participant-form.component';
import { ParticipantCreateComponent } from './participant-create/participant-create.component';
import { ParticipantEditComponent } from './participant-edit/participant-edit.component';
import { AuthGuard } from '../auth.guard';

const participantRoutes: Routes = [
  { path: 'participant/:id', component: ParticipantDetailComponent, canActivate: [AuthGuard] },
  { path: 'participants', component: ParticipantListComponent, canActivate: [AuthGuard] },
  { path: 'edit-participant/:id', component: ParticipantEditComponent, canActivate: [AuthGuard] },
  { path: 'create-participant', component: ParticipantCreateComponent, canActivate: [AuthGuard] },
 
];

@NgModule({
  declarations: [
    ParticipantListComponent,
    ParticipantDetailComponent,
    ParticipantSexeDirective,
    ParticipantFormComponent,
    ParticipantCreateComponent,
    ParticipantEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(participantRoutes)
  ]
})
export class ParticipantModule { }
