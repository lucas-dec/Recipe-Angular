import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecommendedComponent } from '../app/views/recommended/recommended.component';
import { MaincourseComponent } from '../app/views/maincourse/maincourse.component';
import { CoctailsComponent } from '../app/views/coctails/coctails.component';
import { SaladComponent } from '../app/views/salad/salad.component';
import { SearchComponent } from '../app/views/search/search.component';
import { DetailsRecipeComponent } from './views/details-recipe/details-recipe.component';


const routes: Routes = [

	{ path: "recommended/:id", component: DetailsRecipeComponent },
	{ path: "recommended", component: RecommendedComponent },
	{ path: "maincourse/:id", component: DetailsRecipeComponent },
	{ path: "maincourse", component: MaincourseComponent },
	{ path: "coctails/:id", component: DetailsRecipeComponent },
	{ path: "coctails", component: CoctailsComponent },
	{ path: "salad/:id", component: DetailsRecipeComponent },
	{ path: "salad", component: SaladComponent },
	{ path: "search/:search/:id", component: DetailsRecipeComponent },
	{ path: "search/:search", component: SearchComponent },
	{ path: "", redirectTo: "/recommended", pathMatch: "full" }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
