import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsComponent } from './modules/forms/forms.component';
import { ApiComponent } from './modules/api/api.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
