import { Directive, Input } from "@angular/core";
import { NG_VALIDATORS, FormControl, Validator } from '@angular/forms'


@Directive({
  selector: '[customMin][ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CustomDirective,
    multi: true
  }]
})
export class CustomDirective implements Validator {

  @Input() minimo!: number;

  constructor(){
  }

  validate(control: FormControl) {
    const inputValue = control.value;
    return (inputValue < this.minimo)
    ? {'customMin':true} : null ;
  }
}
