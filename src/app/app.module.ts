import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiphyDisplayComponent } from './components/giphy-display/giphy-display.component';
import { RandomComponent } from './components/random/random.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TrendingComponent } from './components/trending/trending.component';

@NgModule({
  declarations: [
    AppComponent,
    GiphyDisplayComponent,
    RandomComponent,
    NavbarComponent,
    TrendingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
