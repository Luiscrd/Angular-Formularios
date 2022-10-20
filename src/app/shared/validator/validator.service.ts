import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  noPuedeSerStrider(control: FormControl): ValidationErrors | null {

    const valor: string = control.value?.trim().toLowerCase()

    if (valor === 'strider') {

      return {
        noStrider: true
      }

    }

    return null

  }

  camposIguales(campo1: string, campo2: string){

    return ( formGoup: AbstractControl ): ValidationErrors | null => {

      const pass1 = formGoup.get( campo1 )?.value

      const pass2 = formGoup.get( campo2 )?.value

      if ( pass1 != pass2 && pass1.length > 0 &&  pass2.length > 0 ) {

        formGoup.get( campo2 )?.setErrors( { noIguales: true } )

        return { noIguales: true }

      } else if ( pass2.length === 0 ) {

        formGoup.get( campo2 )?.setErrors( { required: true } )

        return { require: true }

      }

      formGoup.get( campo2 )?.setErrors( null )

      return null

    }

  }

}
