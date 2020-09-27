import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Theme3';
  info;
  constructor(private formBuilder: FormBuilder){
    this.info = this.formBuilder.group({
     name: '',
     email: '',
     contact: '',
     city: '',
     birthdate: '',
     birthweek: '',
     address: '',
     hobby: '',
     education: '',


      })    
      }  
  
      onSubmit(values){
        console.warn("Form Submit", values)
        }
    }







                