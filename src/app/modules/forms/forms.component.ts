import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  userForm: FormGroup;
  isSubmitted     :   boolean   = false;

  constructor() { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('[a-z]{10,}')]),
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
    * Programatically listen for change event on radio button
    * @public changeGender
    * @method changeGender
    * @return {none}
  */
  changeGender(event) {
    console.log(event.target.value);
  }

  /*
    * 
    * Programatically listen for change event on select dropdown
    * @public onChange
    * @method onChange
    * @return {none}
  */
  onChange(event) {
    console.log(event.target.value);
    if(event.target.value && event.target.value != '') {
      this.userForm.get('country').setValue('event.target.value');
    } else {
      console.log('This field is required');
    }
  }

  /*
    * 
    * Programatically listen for change event on checkbox
    * @public checkTerms
    * @method checkTerms
    * @return {none}
  */
  checkTerms(event) {
    console.log(event.target.checked);
    if(event.target.checked) {
      this.userForm.get('terms').setValue(event.target.checked);
    } else {
      console.log('Checkbox is required');
    }
  }

  /*
    * 
    * Programatically submit the form
    * @public onSubmit
    * @method onSubmit
    * @return {none}
  */
  onSubmit() {
    this.isSubmitted = true;
    console.log(this.userForm);
  }

}
