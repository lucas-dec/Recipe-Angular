import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/components/header/header.component';
import { RecommendedComponent } from './views/recommended/recommended.component';
import { MaincourseComponent } from './views/maincourse/maincourse.component';
import { CoctailsComponent } from './views/coctails/coctails.component';
import { SaladComponent } from './views/salad/salad.component';
import { SearchComponent } from './views/search/search.component';
import { ButtonNavComponent } from '../app/components/button-nav/button-nav.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { SearchHeaderComponent } from './components/search-header/search-header.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemComponent } from './components/item/item.component';
import { NotificationComponent } from './components/notification/notification.component';
import { LoadNewRecipesComponent } from './components/load-new-recipes/load-new-recipes.component';
import { DetailsRecipeComponent } from './views/details-recipe/details-recipe.component';
import { InfoItemComponent } from './components/info-item/info-item.component';
import { IngredientsListComponent } from './components/ingredients-list/ingredients-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecommendedComponent,
    MaincourseComponent,
    CoctailsComponent,
    SaladComponent,
    SearchComponent,
    ButtonNavComponent,
    SectionHeaderComponent,
    SearchHeaderComponent,
    SearchFormComponent,
    ItemsListComponent,
    ItemComponent,
    NotificationComponent,
    LoadNewRecipesComponent,
    DetailsRecipeComponent,
    InfoItemComponent,
    IngredientsListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
