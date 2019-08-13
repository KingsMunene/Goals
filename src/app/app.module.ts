import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalsComponent } from './goals/goals.component';
import { GoalsdetailsComponent } from './goalsdetails/goalsdetails.component';
import { GoalsformComponent } from './goalsform/goalsform.component';
import { TimecounterPipe } from './timecounter.pipe';
import { StrikethroughDirective } from './strikethrough.directive';

@NgModule({
  declarations: [
    AppComponent,
    GoalsComponent,
    GoalsdetailsComponent,
    GoalsformComponent,
    TimecounterPipe,
    StrikethroughDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
