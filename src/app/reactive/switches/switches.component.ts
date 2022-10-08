import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

interface Persona {
  genero: string;
  notificaciones: boolean;
}

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {


  error:boolean = false;

  miFormulario: FormGroup = this.fb.group({
    genero: [ '', Validators.required ],
    notificaciones: [ false, Validators.required ],
    condiciones: [ false, Validators.requiredTrue ],
  })

  persona: Persona = {
    genero: '',
    notificaciones: false,
  }

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {

    this.miFormulario.reset( { ...this.persona, condiciones: false } );

    // this.miFormulario.valueChanges.subscribe( ({ condiciones, ...rest }) => {

    //   this.persona = rest;

    // })

  }

  guardar() {

    if(this.miFormulario.invalid){
      this.error = true
      return
    }

    const formValue = { ...this.miFormulario.value };
    delete formValue.condiciones;

    this.miFormulario.reset( { ...this.persona, condiciones: false } );

    this.persona = formValue;

    this.error = false

  }

}
