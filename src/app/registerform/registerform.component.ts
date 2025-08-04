import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.scss']
})
export class RegisterformComponent {

  registerForm!:FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the form in ngOnInit
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], // Add email validation
      password: ['', [Validators.required, Validators.minLength(6)]], // Add password validation
      gender: ['', Validators.required],
      phonenum: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]], // Add phone number validation (10 digits)
      age: ['', [Validators.required, Validators.min(18)]], // Example: Minimum age validation (18+)
      street: ['', Validators.required],
      city: ['', Validators.required],
      Pincode: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]] // Add pincode validation (6 digits)
    });
  }
  onSubmit(){
    console.log('Form 33333Submitted')
    this.submitted = true;

    console.log('Form 65432')
    if (this.registerForm.invalid) {
      return;
    }

    console.log('Form Submitted', this.registerForm);
  }
  get f() { return this.registerForm.controls; }

  onReset(){

  }

}
