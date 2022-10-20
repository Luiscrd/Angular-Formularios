import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectRoutingModule } from './select-routing.module';
import { SeletorPageComponent } from './pages/seletor-page/seletor-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelctMostPageComponent } from './pages/selct-most-page/selct-most-page.component';


@NgModule({
  declarations: [
    SeletorPageComponent,
    SelctMostPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectRoutingModule
  ]
})
export class SelectModule { }
