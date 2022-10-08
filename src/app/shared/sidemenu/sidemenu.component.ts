import { Component } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
};

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {

templateMenu: MenuItem[] = [
  {
    texto: 'Básicos',
    ruta: '/template/basicos'
  },
  {
    texto: 'Dinámicos',
    ruta: '/template/dinamicos'
  },
  {
    texto: 'Swiches',
    ruta: '/template/swiches'
  },
];

reactiveMenu: MenuItem[] = [
  {
    texto: 'Básicos',
    ruta: '/reactive/basicos'
  },
  {
    texto: 'Dinámicos',
    ruta: '/reactive/dinamicos'
  },
  {
    texto: 'Swiches',
    ruta: '/reactive/swiches'
  },
];

authMenu: MenuItem[] = [
  {
    texto: 'Login',
    ruta: '/auth/login'
  },
  {
    texto: 'Registro',
    ruta: '/auth/registro'
  },
];


};
