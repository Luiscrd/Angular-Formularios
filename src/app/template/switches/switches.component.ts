import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  genero: string;
  notificaciones: boolean;
}

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  error:boolean = false;

  persona: Persona = {
    genero: '',
    notificaciones: false,
  }

  condiciones: boolean = false;

  guardar() {

    console.log('Guardado correctamente');

    this.miFormulario.resetForm();

  }

}
