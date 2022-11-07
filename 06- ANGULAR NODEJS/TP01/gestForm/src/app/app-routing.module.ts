import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationDetailComponent } from './foormation/formation-detail/formation-detail.component';
import { FormationListComponent } from './foormation/formation-list/formation-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = 
[
  {path: 'formations', component: FormationListComponent},
  {path: 'formations/:id', component: FormationDetailComponent},
  {path: '', redirectTo: 'formations', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
