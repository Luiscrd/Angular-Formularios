import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido():boolean{

    return this.miFormulario?.controls['producto']?.invalid
    && this.miFormulario?.controls['producto']?.touched;

  }

  precioValido():boolean{

    return this.miFormulario?.controls['precio']?.invalid
    && this.miFormulario?.controls['precio']?.touched;

  }

  existenciasValido(): boolean{

    return this.miFormulario?.controls['existencias']?.invalid
    && this.miFormulario?.controls['existencias']?.touched;

  }

  guardar(){

    console.log('Guardado correctamente');

    this.miFormulario.resetForm();

  }

}
