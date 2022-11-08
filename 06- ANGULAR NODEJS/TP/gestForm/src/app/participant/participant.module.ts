import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { ParticipantDetailComponent } from './participant-detail/participant-detail.component';
import { ParticipantCardDirective } from './participant-card.directive';

const participantroute : Routes = 
[
  {path: 'participants', component: ParticipantListComponent},
  {path: 'participants/:id', component: ParticipantDetailComponent}
]


@NgModule({
  declarations: 
  [
    ParticipantListComponent,
    ParticipantDetailComponent,
    ParticipantCardDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(participantroute)
  ]
})
export class ParticipantModule { }
