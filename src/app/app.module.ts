import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/components/header/header.component';
import { RecommendedComponent } from './views/recommended/recommended.component';
import { MaincourseComponent } from './views/maincourse/maincourse.component';
import { CoctailsComponent } from './views/coctails/coctails.component';
import { SaladComponent } from './views/salad/salad.component';
import { SearchComponent } from './views/search/search.component';
import { ButtonNavComponent } from '../app/components/button-nav/button-nav.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecommendedComponent,
    MaincourseComponent,
    CoctailsComponent,
    SaladComponent,
    SearchComponent,
    ButtonNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
