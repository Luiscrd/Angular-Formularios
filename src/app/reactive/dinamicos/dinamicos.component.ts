import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  // miFormularioReactive: FormGroup = this.fb.group({
  //   nombre: [ '', [ Validators.required, Validators.minLength(3) ] ],
  //   favoritos: this.fb.array([
  //     this.fb.group({id:[1],nombre:['Angular']}),
  //     this.fb.group({id:[2],nombre:['VueJs']}),
  //   ])
  // })

  miFormularioReactive: FormGroup = this.fb.group({
      nombre: [ '', [ Validators.required, Validators.minLength(3) ] ],
      favoritos: this.fb.array([
        ['Angular'],
        ['VueJs']
      ])
    })

    nuevoFavorito: FormControl = this.fb.control('', [ Validators.required ])

    get favoritosArr(){
      return this.miFormularioReactive.get('favoritos') as FormArray;
    }

  constructor( private fb: FormBuilder ) { }

  campoEsValido(input:string){
    return this.miFormularioReactive.controls[input].errors
    && this.miFormularioReactive.controls[input].touched
  }

  agregarFavorito(){

    // if(this.miFormularioReactive.invalid){

    //   this.miFormularioReactive.markAllAsTouched();

    //   return;

    // }

    // this.favoritosArr.push( new FormControl( this.nuevoFavorito.value, Validators.required) )

    this.favoritosArr.push( this.fb.control( this.nuevoFavorito.value, Validators.required ) )

    this.nuevoFavorito.reset();

  }

  eliminarFavorito(indice: number) {

    this.favoritosArr.removeAt(indice);

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
