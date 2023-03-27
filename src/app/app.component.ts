import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  addForm!: FormGroup;
  genders = ['male', 'female'];

  constructor(private myForm: FormBuilder){}

  ngOnInit(): void {
    this.addForm = this.myForm.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      question: ['pet'],
      gender: ['male']
    });
  }

  get frm(): any {
    return this.addForm.controls;
  }
  
  onSubmit(){
    console.log(this.addForm);
    
  }

}
