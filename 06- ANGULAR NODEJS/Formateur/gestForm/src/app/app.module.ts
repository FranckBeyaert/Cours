import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormationModule } from './formation/formation.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParticipantModule } from './participant/participant.module';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormationModule,
    ParticipantModule,
    AppRoutingModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
