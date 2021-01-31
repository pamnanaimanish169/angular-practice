import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  userForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      terms: new FormControl('', Validators.required)
    })
  }

  /*
    * 
    * Programatically submit the form
    * @public onSubmit
    * @method onSubmit
    * @return {none}
  */
  onChange(event) {

  }

  /*
    * 
    * Programatically submit the form
    * @public onSubmit
    * @method onSubmit
    * @return {none}
  */
  onSubmit() {
    console.log(this.userForm);
  }

}
