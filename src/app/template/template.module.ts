import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomDirective } from './directives/custom-min.directive';


@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent,
    CustomDirective
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    RouterLink,
    FormsModule,
  ]
})
export class TemplateModule { }
