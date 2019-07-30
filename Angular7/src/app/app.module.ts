import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {appRoutingModule} from './app.routing';	
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatTooltipModule,
} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent, LoginComponent
  ],
  imports: [
    appRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
