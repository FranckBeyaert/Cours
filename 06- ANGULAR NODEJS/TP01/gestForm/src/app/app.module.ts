import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormationCardDirective } from './formation-card.directive';
import { FormationImgDirective } from './formation-img.directive';
import { FormationLangagesPipe } from './formation-langages.pipe';
import { FormationListComponent } from './formation-list/formation-list.component';
import { FormationDetailComponent } from './formation-detail/formation-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    FormationCardDirective,
    FormationImgDirective,
    FormationLangagesPipe,
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
