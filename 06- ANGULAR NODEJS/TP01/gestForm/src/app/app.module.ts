import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormationCardDirective } from './foormation/formation-card.directive';
import { FormationListComponent } from './foormation/formation-list/formation-list.component';
import { FormationDetailComponent } from './foormation/formation-detail/formation-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    FormationCardDirective,
    FormationListComponent,
    FormationDetailComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
