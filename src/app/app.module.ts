import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApiComponent } from './modules/api/api.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import ('./modules/home/home.module').then(home => home.HomeModule) },
  { path: 'api', loadChildren: () => import ('./modules/api/api.module').then(api => api.ApiModule),},
  { path: 'forms', loadChildren: () => import ('./modules/forms/forms.module').then(form => form.FormsModule),},
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
