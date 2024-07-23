import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BigCardGameComponent } from './components/big-card-game/big-card-game.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardOffersComponent } from './components/card-offers/card-offers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BigCardGameComponent,
    MenuBarComponent,
    SidebarComponent,
    CardOffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
