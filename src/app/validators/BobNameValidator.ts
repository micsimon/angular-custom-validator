import {AbstractControl} from "@angular/forms";

export class BobNameValidator {
  static validate(control: AbstractControl): { [p: string]: any } {
    if (control.value === null || control.value === undefined) {
      return null;
    }
    return control.value.indexOf('Bob') === -1 ? null : {
        validateFirstName: {
          valid: false
        }
      };
  }

}
