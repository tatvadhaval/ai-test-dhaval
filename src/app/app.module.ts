import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatInputModule, MatButtonModule  } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { JsonDiologueComponent } from './json-diologue/json-diologue.component';

@NgModule({
  declarations: [
    AppComponent,
    JsonDiologueComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule 
  ],
  providers: [],
  bootstrap: [AppComponent, JsonDiologueComponent]
})
export class AppModule { }
