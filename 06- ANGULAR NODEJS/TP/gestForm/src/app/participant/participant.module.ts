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

const participantroute : Routes = 
[
  {path: 'participants', component: ParticipantListComponent},
  {path: 'participants/:id', component: ParticipantDetailComponent},
  {path: 'newparticipant', component: ParticipantCreateComponent},
  {path: 'editparticipant/:id', component: ParticipantEditComponent}
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
