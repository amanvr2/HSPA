import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';
import { User } from 'src/app/model/User';
import { UserServiceService } from 'src/app/service/userService.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerationForm!: FormGroup;
  user!: User;
  userSubmitted!: boolean;
  constructor(private fb:FormBuilder, private userService:UserServiceService) { }

  ngOnInit() {

    this.createRegistrationForm();
  }

  createRegistrationForm(){

    this.registerationForm = this.fb.group({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    },{validators:this.passwordMatchingValidator})


  }

  passwordMatchingValidator(fc: AbstractControl): ValidationErrors | null {
    return fc.get('password')?.value === fc.get('confirmPassword')?.value ? null :
      { notmatched: true }
  };

  get userName() {
    return this.registerationForm.get('userName') as FormControl;
  }

  get email() {
    return this.registerationForm.get('email') as FormControl;
  }
  get password() {
    return this.registerationForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registerationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registerationForm.get('mobile') as FormControl;
  }


  onSubmit() {
    console.log(this.registerationForm);
    this.userSubmitted = true;
    if(this.registerationForm.valid){
      //this.user = Object.assign(this.user, this.registerationForm.value);
      this.userService.addUser(this.userData());
      this.registerationForm.reset();
      this.userSubmitted = false;
    }
  }

  userData(): User{
    return this.user= {

      userName:this.userName.value,
      email:this.email.value,
      password:this.password.value,
      mobile:this.mobile.value,
    }
  }



}
