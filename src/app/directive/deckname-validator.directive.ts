import { Directive, Input } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from "@angular/forms";
import { InfectionDeckService } from "../service/infection-deck-service";

@Directive({
  selector: '[deckNameValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: DeckNameValidatorDirective, multi: true}]
})
export class DeckNameValidatorDirective implements Validator {
    
  constructor(private infectionDeckService: InfectionDeckService) {
  }

  validate(control: AbstractControl): {[key: string]: any} {
    return this.deckNameValidator()(control);
  }

  private deckNameValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      let alreadyExist: boolean = this.infectionDeckService.decks.map(d => d.name).indexOf(control.value) >= 0;
      return alreadyExist ? {'deckNameAlreadyExist': {value: control.value}} : null;
    };
  }
}