import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'template',
    loadChildren: () => import('./template/template.module').then( m => m.TemplateModule )
  },
  {
    path: 'reactive',
    loadChildren: () => import('./reactive/reactive.module').then( m => m.ReactiveModule )
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'selectores',
    loadChildren: () => import('./select/select.module').then( m => m.SelectModule )
  },
  // {
  //   path: '**',
  //   redirectTo: 'template'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
