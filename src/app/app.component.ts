import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Formulario para test';
  mensaje!:string|null
  public form= new FormGroup({
    user:new FormControl('', [Validators.required, Validators.minLength(5)]),
    pass:new FormControl('', [Validators.required, Validators.minLength(4)])
  })

  constructor(){}

  ngOnInit(): void {
    
  }

  enviar():void{
    this.mensaje='Formulario enviado'
  }

}
