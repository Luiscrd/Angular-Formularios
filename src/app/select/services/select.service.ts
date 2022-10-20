import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pais } from '../interfaces/paises.inteface';
import { combineLatest, Observable, of } from 'rxjs';
import { PaisCod } from '../interfaces/paisesCod.interface';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  private baseUrl: string = 'https://restcountries.com/v2';

  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  get regiones(): string[] {

    return [...this._regiones]

  }

  constructor(

    private http: HttpClient

  ) { }

  getPaisesPorRegion( region: string ): Observable<Pais[]> {

    if( !region ) {

      return of([])

    }

    return this.http.get<Pais[]>(`${ this.baseUrl }/region/${ region }?fields=name,alpha3Code`)

  }

  getPaisePorCodigo( codigo: string ): Observable<PaisCod | null> {

    if( !codigo ) {

      return of(null)

    }

    return this.http.get<PaisCod>(`${ this.baseUrl }/alpha/${ codigo }`)

  }

  getPaisPorCodigoSmall( codigo: string ): Observable<Pais> {

    return this.http.get<Pais>(`${ this.baseUrl }/alpha/${ codigo }?fields=name,alpha3Code`)

  }

  getPaisesPorCodigoSmall( borders: string[] | undefined ): Observable<Pais[] | null> {

    if( !borders ) {

      return of([])

    }

    const peticiones: Observable<Pais>[] = []

    borders.forEach( codigo => {

      const peticion = this.getPaisPorCodigoSmall( codigo )

      peticiones.push( peticion )

    })

    return combineLatest( peticiones )

  }

}
