import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './support/components/nav-bar/nav-bar.component';
import { TeamModalComponent } from './support/components/team-modal/team-modal.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    TeamModalComponent,
    NavBarComponent,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
