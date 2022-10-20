import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SelectService } from '../../services/select.service';
import { Pais } from '../../interfaces/paises.inteface';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selct-most-page',
  templateUrl: './selct-most-page.component.html',
  styleUrls: ['./selct-most-page.component.css']
})
export class SelctMostPageComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    region: [ '', Validators.required ],
    pais: [ '', Validators.required ],
    frontera: [ '' ],
  })

  cargando: boolean = false;

  regiones: string[] = [];
  paises: Pais[] = [];
  fronteras: Pais[] | null = [];

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

        this.cargando = true

      }),
      switchMap( region => this.paisesService.getPaisesPorRegion( region ) )
    )
    .subscribe( paises => {

      this.cargando = false

      this.paises = paises;

    })

    this.miFormulario.get('pais')?.valueChanges
    .pipe(
      tap( ( _ ) => {

        this.cargando = true

        this.miFormulario.get('frontera')?.reset('')

      }),
      switchMap( codigo => this.paisesService.getPaisePorCodigo( codigo ) ),
      switchMap( pais => this.paisesService.getPaisesPorCodigoSmall( pais?.borders ))
    )
    .subscribe( paises => {

      this.cargando = false

      this.fronteras = paises;

    })


  }

  guardar() {

    console.log(this.miFormulario.value);

  }

}
