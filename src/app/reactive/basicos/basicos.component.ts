import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  // miFormularioReactive: FormGroup = new FormGroup({
  //   nombre: new FormControl(''),
  //   precio: new FormControl(''),
  //   existencias: new FormControl('')
  // })

  miFormularioReactive: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required, Validators.minLength(3) ] ],
    precio: [ '', [ Validators.required, Validators.max(9999), Validators.min(1) ] ],
    existencias: [ '', [ Validators.required, Validators.max(9999), Validators.min(1) ] ]
  })

  constructor( private fb: FormBuilder ) { }

  // jugar con los mensajes de error (Pendiente)
  campoEsValido(input:string){
    return this.miFormularioReactive.controls[input].errors
    && this.miFormularioReactive.controls[input].touched
  }

  guardar(){
    if(this.miFormularioReactive.invalid){
      this.miFormularioReactive.markAllAsTouched();
      return;
    }
    alert('Guardado correctamente')
    this.miFormularioReactive.reset();
  }


}
