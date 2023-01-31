import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { registro } from "./registrarUsuario";
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent {
  pruebaForm:FormGroup;

constructor(private builder:FormBuilder, private UsuarioService:UsuariosService){
  this.pruebaForm=this.builder.group({
    nombre:['',[Validators.required,Validators.maxLength(35)]],
    email:['', [Validators.email, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/)]],
    password:['', [Validators.required, Validators.minLength(8)]],
  })
}

usuarios:registro[]=[]

agregarEmpleado():any{
  let newUser=new registro(this.nombre, this.email, this.password);

  this.UsuarioService.agregarUsuarioService(newUser);
}

nombre:string='';
email:string='';
password:string='';

submit(){
  if(!this.pruebaForm.valid){
    alert('ingrese los datos')
  }else{
    console.log(this.pruebaForm.value)
  }
}
}
