import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { ParticipantDetailComponent } from './participant-detail/participant-detail.component';
import { ParticipantCardDirective } from './participant-card.directive';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
    RouterModule.forChild(participantroute)
  ]
})
export class ParticipantModule { }
