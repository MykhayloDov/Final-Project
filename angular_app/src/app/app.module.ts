import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';
import { ShopModuleComponent } from './shop-module/shop-module.component';
import {AdminGuard} from './admin-guard.guard';
import {AppRoutingModule, routes} from './app-routing.module';
import {RouterModule} from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import {HttpClient} from '@angular/common/http';

/////
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { IslandsComponent } from './islands/islands.component';
import { SeaFoodsComponent } from './sea-foods/sea-foods.component';
import { SweetMasterpieceComponent } from './sweet-masterpiece/sweet-masterpiece.component';
import { PeopleComponent } from './people/people.component';
import { ArqueologyComponent } from './arqueology/arqueology.component';
import { UndergroudComponent } from './undergroud/undergroud.component';
import { LoginComponent } from './login/login.component';
import {CastlesPalacesComponent} from './castles-palaces/castles-palaces.component';
import {BeachComponent} from './beach/beach.component';
import {ClimateComponent} from './climate/climate.component';
import {AdminComponent } from './admin/admin.component';
import {GastronomyTraditionsComponent} from './gastronomy-traditions/gastronomy-traditions.component';
import {HowToGoComponent} from './how-to-go/how-to-go.component';
import {MuseumsComponent} from './museums/museums.component';
import {NatureComponent} from './nature/nature.component';
import {NewsComponent} from './news/news.component';
import {OceanComponent} from './ocean/ocean.component';
import {PricesComponent} from './prices/prices.component';
import {SeaDiscoversComponent} from './sea-discovers/sea-discovers.component';
import {UniqueFactsComponent} from './unique-facts/unique-facts.component';
import {UniquePlacementComponent} from './unique-placement/unique-placement.component';
import {WhatToSeeComponent} from './what-to-see/what-to-see.component';
import {WhenToGoComponent} from './when-to-go/when-to-go.component';
import {WhenToStayComponent} from './when-to-stay/when-to-stay.component';

@NgModule({
  declarations: [
    AdminComponent,
    AppComponent,
    ArqueologyComponent,
    BeachComponent,
    CastlesPalacesComponent,
    ClimateComponent,
    FooterComponent,
    GastronomyTraditionsComponent,
    HistoryComponent,
    HomeComponent,
    HowToGoComponent,
    IslandsComponent,
    LoginComponent,
    MuseumsComponent,
    NatureComponent,
    NavigationComponent,
    NewsComponent,
    OceanComponent,
    PeopleComponent,
    PricesComponent,
    SeaDiscoversComponent,
    SeaFoodsComponent,
    ShopModuleComponent,
    SweetMasterpieceComponent,
    UndergroudComponent,
    UniqueFactsComponent,
    UniquePlacementComponent,
    WhatToSeeComponent,
    WhenToGoComponent,
    WhenToStayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
