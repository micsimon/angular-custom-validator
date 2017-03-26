import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BobNameValidator} from "../../validators/BobNameValidator";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  private formGroup: FormGroup;

  private person: Person;

  constructor(private formBuilder: FormBuilder) {
    this.person = new Person('Hans', 'Last');
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({'firstName': [this.person.firstName, [Validators.required, BobNameValidator.validate]]})
  }
}

class Person {

  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
