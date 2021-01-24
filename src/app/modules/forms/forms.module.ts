import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsComponent } from './forms.component';

const appRoutes = [
  { path: '', component: FormsComponent },
];

@NgModule({
  declarations: [
    FormsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
  ]
})
export class FormsModule { }
