import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BigCardGameComponent } from './components/big-card-game/big-card-game.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SmallCardGameComponent } from './components/small-card-game/small-card-game.component';
import { BigCardGameLabelComponent } from './components/big-card-game/big-card-game_label/big-card-game-label.component';
import { BigCardGamePlayerComponent } from './components/big-card-game/big-card-game_player/big-card-game-player.component';
import { BigCardGameDescriptionComponent } from './components/big-card-game/big-card-game-description/big-card-game-description.component';
import { BigCardGamePhotoComponent } from './components/big-card-game/big-card-game-photo/big-card-game-photo.component';
import { BigCardGameButtonComponent } from './components/big-card-game/big-card-game-description/big-card-game-button/big-card-game-button.component';
import { BigCardGameSystemIconComponent } from './components/big-card-game/big-card-game-description/big-card-game-system-icon/big-card-game-system-icon.component';
import { BigCardGameValueComponent } from './components/big-card-game/big-card-game-description/big-card-game-value/big-card-game-value.component';
import { CarrouselComponent } from './components/carousel/carrousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BigCardGameComponent,
    NavbarComponent,
    SidebarComponent,
    SmallCardGameComponent,
    BigCardGameLabelComponent,
    BigCardGamePlayerComponent,
    BigCardGameDescriptionComponent,
    BigCardGamePhotoComponent,
    BigCardGameButtonComponent,
    BigCardGameSystemIconComponent,
    BigCardGameValueComponent,
    CarrouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
