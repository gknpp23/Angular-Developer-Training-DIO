import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BigCardGameComponent } from './components/big-card-game/big-card-game.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SmallCardGameComponent } from './components/small-card-game/small-card-game.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BigCardGameComponent,
    NavbarComponent,
    SidebarComponent,
    SmallCardGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
