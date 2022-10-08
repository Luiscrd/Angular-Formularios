import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {



  @ViewChild('miFormulario') miFormulario!: NgForm;

  nuevoFavorito: string = '';
  error:boolean = false;
  persona: Persona = {
    nombre: 'Luis Carballo',
    favoritos: [
      {
        id: 1,
        nombre: 'Angualar'
      },
      {
        id: 2,
        nombre: 'VueJs'
      },
    ]
  }

  agregarFavorito() {

    if(this.nuevoFavorito === ""){

      this.error = true;
      return;

    }

    this.error = false;

    let id: number = 1;

    this.persona.favoritos.forEach(

      favo => {

        if (favo.id === id) {

          id += 1

        }

      }

    )

    const nuevoFavoritoAdd: Favorito = {

      id: id,
      nombre: this.nuevoFavorito

    }

    this.persona.favoritos.push(nuevoFavoritoAdd);

    function condicionParaOrdenar(favoritoA:Favorito, favoritoB:Favorito) {

      return favoritoB.id + favoritoA.id;

    }

    this.persona.favoritos.sort(condicionParaOrdenar);

    this.nuevoFavorito = '';

  }



  eliminar(indice: number) {

    this.persona.favoritos.splice(indice, 1);

  }


  guardar() {

    console.log('Guardado correctamente');

    this.miFormulario.resetForm();

  }

}
