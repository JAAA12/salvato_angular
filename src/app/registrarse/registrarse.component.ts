import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent {
  pruebaForm:FormGroup;

constructor(private builder:FormBuilder){
  this.pruebaForm=this.builder.group({
    nombre:['',[Validators.required,Validators.maxLength(35)]],
    email:['', [Validators.email, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/)]],
    password:['', [Validators.required, Validators.minLength(8)]],
    /* interest:this.builder.array([
      this.builder.control('',[Validators.required, Validators.minLength(10)])
    ]) */
  })
}

submit(){
  if(!this.pruebaForm.valid){
    alert('ingrese los datos')
  }else{
    console.log(this.pruebaForm.value)
  }
}
}
