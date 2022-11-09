import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { ParticipantDetailComponent } from './participant-detail/participant-detail.component';
import { ParticipantCardDirective } from './participant-card.directive';
import { FormsModule } from '@angular/forms';
import { ParticipantFormComponent } from './participant-form/participant-form.component';
import { ParticipantCreateComponent } from './participant-create/participant-create.component';
import { ParticipantEditComponent } from './participant-edit/participant-edit.component';
import { AuthGuard } from '../auth.guard';

const participantroute : Routes = 
[
  {path: 'participants', component: ParticipantListComponent, canActivate: [AuthGuard]},
  {path: 'participants/:id', component: ParticipantDetailComponent, canActivate: [AuthGuard]},
  {path: 'newparticipant', component: ParticipantCreateComponent, canActivate: [AuthGuard]},
  {path: 'editparticipant/:id', component: ParticipantEditComponent, canActivate: [AuthGuard]}
]


@NgModule({
  declarations: 
  [
    ParticipantListComponent,
    ParticipantDetailComponent,
    ParticipantCardDirective,
    ParticipantFormComponent,
    ParticipantCreateComponent,
    ParticipantEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(participantroute)
  ]
})
export class ParticipantModule { }
