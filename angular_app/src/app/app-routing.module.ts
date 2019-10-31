import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {ArqueologyComponent} from './arqueology/arqueology.component';
import {BeachComponent} from './beach/beach.component';
import {CastlesPalacesComponent} from './castles-palaces/castles-palaces.component';
import {ClimateComponent} from './climate/climate.component';
import {FooterComponent} from './footer/footer.component';
import {GastronomyTraditionsComponent} from './gastronomy-traditions/gastronomy-traditions.component';
import {HistoryComponent} from './history/history.component';
import {HomeComponent} from './home/home.component';
import {HowToGoComponent} from './how-to-go/how-to-go.component';
import {IslandsComponent} from './islands/islands.component';
import {LoginComponent} from './login/login.component';
import {MuseumsComponent} from './museums/museums.component';
import {Navigation} from '@angular/router';
import {NewsComponent} from './news/news.component';
import {OceanComponent} from './ocean/ocean.component';
import {PeopleComponent} from './people/people.component';
import {PricesComponent} from './prices/prices.component';
import {SeaDiscoversComponent} from './sea-discovers/sea-discovers.component';
import {SeaFoodsComponent} from './sea-foods/sea-foods.component';
import {ShopModuleComponent} from './shop-module/shop-module.component';
import {SweetMasterpieceComponent} from './sweet-masterpiece/sweet-masterpiece.component';
import {UndergroudComponent} from './undergroud/undergroud.component';
import {UniqueFactsComponent} from './unique-facts/unique-facts.component';
import {UniquePlacementComponent} from './unique-placement/unique-placement.component';
import {WhatToSeeComponent} from './what-to-see/what-to-see.component';
import {WhenToGoComponent} from './when-to-go/when-to-go.component';
import {WhenToStayComponent} from './when-to-stay/when-to-stay.component';
import {ActivatedRoute} from '@angular/router';
import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {AdminComponent} from './admin/admin.component';
import {AdminGuard} from './admin-guard.guard';


export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AdminGuard]},
  {path: 'arqueology', component: ArqueologyComponent, canActivate: [AdminGuard]},
  {path: 'beach', component: BeachComponent, canActivate: [AdminGuard]},
  {path: 'castlesPalaces', component: CastlesPalacesComponent, canActivate: [AdminGuard]},
  {path: 'climate', component: ClimateComponent, canActivate: [AdminGuard]},
  {path: 'footer', component: FooterComponent},
  {path: 'gastronomyTradition', component: GastronomyTraditionsComponent},
  {path: 'history', component: HistoryComponent, canActivate: [AdminGuard]},
  {path: 'howToGo', component: HowToGoComponent, canActivate: [AdminGuard]},
  {path: 'islands', component: IslandsComponent, canActivate: [AdminGuard]},
  {path: 'museums', component: MuseumsComponent, canActivate: [AdminGuard]},
  {path: 'navigation', component: NavigationComponent},
  {path: 'news', component: NewsComponent, canActivate: [AdminGuard]},
  {path: 'ocean', component: OceanComponent, canActivate: [AdminGuard]},
  {path: 'people', component: PeopleComponent, canActivate: [AdminGuard]},
  {path: 'prices', component: PricesComponent, canActivate: [AdminGuard]},
  {path: 'seaDiscovers', component: SeaDiscoversComponent, canActivate: [AdminGuard]},
  {path: 'seaFoods', component: SeaFoodsComponent, canActivate: [AdminGuard]},
  {path: 'shopModule', component: ShopModuleComponent, canActivate: [AdminGuard]},
  {path: 'sweetMasterpiece', component: SweetMasterpieceComponent, canActivate: [AdminGuard]},
  {path: 'underground', component: UndergroudComponent, canActivate: [AdminGuard]},
  {path: 'uniqueFacts', component: UniqueFactsComponent, canActivate: [AdminGuard]},
  {path: 'uniquePlacement', component: UniquePlacementComponent, canActivate: [AdminGuard]},
  {path: 'whatToSee', component: WhatToSeeComponent, canActivate: [AdminGuard]},
  {path: 'whenToGo', component: WhenToGoComponent, canActivate: [AdminGuard]},
  {path: 'whenToStay', component: WhenToStayComponent, canActivate: [AdminGuard]},
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

