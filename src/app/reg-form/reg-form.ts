import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reg-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reg-form.html',
  styleUrl: './reg-form.css'
})
export class RegForm {

  form!:FormGroup

  constructor(private fb:FormBuilder){

    this.form = this.fb.group({
      firstName:["",[Validators.required,Validators.minLength(5)]],
      lastName:["",[Validators.required,Validators.maxLength(10)]],
      age:["",[Validators.required,Validators.min(17),Validators.max(20)]],
      workEmail:["",[Validators.required,Validators.email]],
      Password:["",[Validators.required,Validators.minLength(6)]],
      confirmPassword:["",[Validators.required,Validators.minLength(6)]],
    })

  }

  isPasswordMatches(){
    if(this.form.value.firstName !== this.form.value.lastName){
      console.log('password dont match');
      return
    }
  }


  submit(){
    if(this.form.valid){
      this.isPasswordMatches()
      console.log('form is valid');
    }

  }



  get fields(){
    return this.form.controls
  }

  



}
