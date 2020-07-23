import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { GridComponent } from './grid/grid.component';
import { CardComponent } from './card/card.component';
import { GridsComponent } from './grids/grids.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    CardComponent,
    GridsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
