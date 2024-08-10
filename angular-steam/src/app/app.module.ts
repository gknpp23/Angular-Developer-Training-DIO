import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

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
import { NavbarLogoComponent } from './components/navbar/navbar-logo/navbar-logo.component';
import { NavbarSearchBarComponent } from './components/navbar/navbar-search-bar/navbar-search-bar.component';
import { NavbarNotificationComponent } from './components/navbar/navbar-notification/navbar-notification.component';
import { NavbarProfileComponent } from './components/navbar/navbar-profile/navbar-profile.component';
import { SideFlapComponent } from './components/sidebar/side-flap/side-flap.component';
import { SideIconComponent } from './components/sidebar/side-flap/side-icon/side-icon.component';
import { SideNameComponent } from './components/sidebar/side-flap/side-name/side-name.component';
import { SideCardComponent } from './components/sidebar/side-card/side-card.component';
import { SmallCardSpecialComponent } from './components/small-card-game/small-card-special/small-card-special.component';
import { SmallCardSimpleComponent } from './components/small-card-game/small-card-simple/small-card-simple.component';
import { SmallCardLabelComponent } from './components/small-card-game/small-card-label/small-card-label.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


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
    CarrouselComponent,
    NavbarLogoComponent,
    NavbarSearchBarComponent,
    NavbarNotificationComponent,
    NavbarProfileComponent,
    SideFlapComponent,
    SideIconComponent,
    SideNameComponent,
    SideCardComponent,
    SmallCardSpecialComponent,
    SmallCardSimpleComponent,
    SmallCardLabelComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
