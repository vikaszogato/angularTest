import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatTableModule, MatButtonModule, MatDialogModule } from '@angular/material';

import { HttpService, httpServiceCreator } from './service/http.service';
import { AppComponentService } from './app.component.service';

import { AppComponent, DataDialogComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DataDialogComponent,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [
    AppComponentService,
    {
      provide: HttpService,
      useFactory: httpServiceCreator,
      deps: [HttpClient],
    }
  ],
  entryComponents: [DataDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
