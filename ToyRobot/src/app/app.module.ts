import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FieldComponent } from './components/field/field.component';
import { CellComponent } from './components/field/components/cell/cell.component';
import { RightBarComponent } from './components/right-bar/right-bar.component';
import { ControlsComponent } from './components/right-bar/components/controls/controls.component';
import { PlacingComponent } from './components/right-bar/components/controls/components/placing/placing.component';
import { MovingComponent } from './components/right-bar/components/controls/components/moving/moving.component';
import { FormsModule } from '@angular/forms';
import { LeftBorderComponent } from './components/field/components/left-border/left-border.component';
import { LowerBorderComponent } from './components/field/components/lower-border/lower-border.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    CellComponent,
    RightBarComponent,
    ControlsComponent,
    PlacingComponent,
    MovingComponent,
    LeftBorderComponent,
    LowerBorderComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
