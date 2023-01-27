import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Formulario para test';
  mensaje!:string|null
  public form!:FormGroup;

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.form=this.fb.group({
      user:['', [Validators.required, Validators.minLength(4)]],
      pass:['', [Validators.required, Validators.minLength(4)]]
    })
  }

  enviar():void{
    console.log(this.form.value)
  }

}
