import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { CarTileComponent } from './car-tile/car-tile.component';
import { CarTilesComponent } from './car-tiles/car-tiles.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { CarListComponent } from './car-list/car-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    CarTileComponent,
    CarTilesComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    AdminComponentComponent,
    CarListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
