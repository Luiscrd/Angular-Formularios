import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SelectService } from '../../services/select.service';
import { Pais } from '../../interfaces/paises.inteface';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-seletor-page',
  templateUrl: './seletor-page.component.html',
  styleUrls: ['./seletor-page.component.css']
})
export class SeletorPageComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    region: [ '', Validators.required ],
    pais: [ { value:'',  disabled: true }, Validators.required ],
    frontera: [ { value:'',  disabled: true }, Validators.required ],
  })

  regiones: string[] = [];
  paises: Pais[] = [];
  fronteras: Pais[] | null = [];

  valid: boolean = false;

  constructor(

    private fb: FormBuilder,
    private paisesService: SelectService

  ) { }

  ngOnInit(): void {

    this.regiones = this.paisesService.regiones;

    this.miFormulario.get('region')?.valueChanges
    .pipe(
      tap( ( _ ) => {

        this.miFormulario.get('pais')?.reset('')

      }),
      switchMap( region => this.paisesService.getPaisesPorRegion( region ) )
    )
    .subscribe( paises => {

      this.paises = paises;

      if( paises.length > 0 ){

        this.miFormulario.get('pais')?.enable();

      } else {

        this.miFormulario.get('pais')?.disable();

      }

    })

    this.miFormulario.get('pais')?.valueChanges
    .pipe(
      tap( ( _ ) => {

        this.miFormulario.get('frontera')?.reset('')

      }),
      switchMap( codigo => this.paisesService.getPaisePorCodigo( codigo ) ),
      switchMap( pais => this.paisesService.getPaisesPorCodigoSmall( pais?.borders ))
    )
    .subscribe( paises => {

      if( paises?.length != 0 ){

        this.valid = false

        this.miFormulario.get('frontera')?.enable();

      } else {


        this.miFormulario.get('frontera')?.disable();

      }


      this.fronteras = paises


    })


  }

  guardar() {

    console.log(this.miFormulario.value);

  }

}
