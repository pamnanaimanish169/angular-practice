import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiComponent } from './api.component';

const appRoutes = [
  { path: '', component: ApiComponent }
];

@NgModule({
  declarations: [
    ApiComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class ApiModule { }
