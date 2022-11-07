import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormationCardDirective } from './formation-card.directive';
import { FormationImgDirective } from './formation-img.directive';
import { FormationLangagesPipe } from './formation-langages.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormationCardDirective,
    FormationImgDirective,
    FormationLangagesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
