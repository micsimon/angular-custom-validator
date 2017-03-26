import {AbstractControl} from "@angular/forms";

export class BobNameValidator {
  static validate(c: AbstractControl): {[p: string]: any} {
    if (c.value === null || c.value === undefined) {
      return null;
    }
    return c.value.indexOf('Bob') === -1 ? null : {
        validateFirstName: {
          valid: false
        }
      };
  }

}
