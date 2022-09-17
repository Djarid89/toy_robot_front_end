import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FieldComponent } from './components/field/field.component';
import { CellComponent } from './components/cell/cell.component';
import { RightBarComponent } from './components/right-bar/right-bar.component';
import { ControlsComponent } from './components/right-bar/components/controls/controls.component';
import { PlacingComponent } from './components/right-bar/components/controls/components/placing/placing.component';
import { MovingComponent } from './components/right-bar/components/controls/components/moving/moving.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    CellComponent,
    RightBarComponent,
    ControlsComponent,
    PlacingComponent,
    MovingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
