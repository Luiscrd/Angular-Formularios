import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeletorPageComponent } from './pages/seletor-page/seletor-page.component';
import { SelctMostPageComponent } from './pages/selct-most-page/selct-most-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'disabled', component: SeletorPageComponent },
      { path: 'ngif', component: SelctMostPageComponent },
      { path: '**', redirectTo: 'disabled' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectRoutingModule { }
