import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
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
import {NatureComponent} from './nature/nature.component';
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
import { ActivatedRoute} from '@angular/router';
import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {AdminComponent} from './admin/admin.component';
import {AdminGuard} from './admin-guard.guard';


export const routes: Routes = [
   {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home' , component: HomeComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AdminGuard]},
  {path: 'arqueology', component: ArqueologyComponent},
  {path: 'beach', component: BeachComponent},
  {path: 'castlesPalaces', component: CastlesPalacesComponent},
  {path: 'climate', component: ClimateComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'gastronomyTradition', component: GastronomyTraditionsComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'howToGo', component: HowToGoComponent},
  {path: 'islands', component: IslandsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'museums', component: MuseumsComponent},
  {path: 'nature', component: NatureComponent},
  {path: 'navigation', component: NavigationComponent},
  {path: 'news', component: NewsComponent},
  {path: 'ocean', component: OceanComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'prices', component: PricesComponent},
  {path: 'seaDiscovers', component: SeaDiscoversComponent},
  {path: 'seaFoods', component: SeaFoodsComponent},
  {path: 'shopModule', component: ShopModuleComponent},
  {path: 'sweetMasterpiece', component: SweetMasterpieceComponent},
  {path: 'underground', component: UndergroudComponent},
  {path: 'uniqueFacts', component: UniqueFactsComponent},
  {path: 'uniquePlacement', component: UniquePlacementComponent},
  {path: 'whatToSee', component: WhatToSeeComponent},
  {path: 'whenToGo', component: WhenToGoComponent},
  {path: 'whenToStay', component: WhenToStayComponent},
  ];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes),  CommonModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }

