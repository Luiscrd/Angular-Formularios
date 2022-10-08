import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Usuario {
  nombre: string;
  email: string;
  username: string;
  password: string;
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';

  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required, Validators.minLength(3), Validators.pattern( this.nombreApellidoPattern ) ] ],
    email: [ '', [ Validators.required, Validators.minLength(3) ] ],
    username: [ '', [ Validators.required, Validators.minLength(3) ] ],
    password1: [ '', [ Validators.required, Validators.minLength(3) ] ],
    password2: [ '', [ Validators.required, Validators.minLength(3) ] ],
    condiciones: [ false, Validators.requiredTrue ],
  })

  usuario: Usuario = {
    nombre: '',
    email: '',
    username: '',
    password: '',
  }

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  campoNoValido( campo:string ){

    return this.miFormulario.get( campo )?.invalid
    && this.miFormulario.get( campo )?.touched

  }

  submitFormularo() {

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

  }

}
