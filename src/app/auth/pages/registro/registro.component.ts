import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

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

  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required, Validators.minLength(3), Validators.pattern( this.validatorService.nombreApellidoPattern ) ] ],
    email: [ '', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern( this.validatorService.emailPattern )
    ], [ this.emailValidator ]
  ],
    username: [ '', [ Validators.required, Validators.minLength(3), this.validatorService.noPuedeSerStrider ]  ],
    password1: [ '', [ Validators.required, Validators.minLength(6) ] ],
    password2: [ '', [ Validators.required ] ],
    condiciones: [ false, Validators.requiredTrue ],
  }, {
    validators: [ this.validatorService.camposIguales( 'password1', 'password2' )]
  })

  usuario: Usuario = {
    nombre: '',
    email: '',
    username: '',
    password: '',
  }

  mostrarPassword1: string = 'password'
  mostrarPassword2: string = 'password'

  // Mensajes de erorr personalizado para cambiar en el html

  get errorMailMsg(): string {

    const error = this.miFormulario.controls[ 'email' ]?.errors

      if( error!['required'] ){

        return '* Campo obligatorio'

      } else if ( error!['minlength'] ) {

        return '* El campo debe tener 6 digitos al menos'

      } else if ( error!['pattern'] ) {

        return '* El formato no es correcto'

      } else if ( error!['emailExist'] ) {

        return '* El mail ya está en uso'
      }

    return''

  }

  constructor(

    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService

    ) { }

  ngOnInit(): void {
  }

  funMostrarPassword1( ){

    if ( this.mostrarPassword1 === 'password') {
      this.mostrarPassword1 = 'text'
    } else {
      this.mostrarPassword1 = 'password'
    }

  }

  funMostrarPassword2( ){

    if ( this.mostrarPassword2 === 'password') {
      this.mostrarPassword2 = 'text'
    } else {
      this.mostrarPassword2 = 'password'
    }

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
