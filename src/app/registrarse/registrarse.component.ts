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
  pruebaForm:FormGroup; /* variable para vincular el formulario con el formgroup */

constructor(private builder:FormBuilder, private UsuarioService:UsuariosService){
  this.pruebaForm=this.builder.group({
    nombre:['',[Validators.required,Validators.maxLength(35)]],
    email:['', [Validators.email, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/)]],
    password:['', [Validators.required, Validators.minLength(8)]],
  }); /* Se contruyen los validators */


  this.UsuarioService.obtenerUsuarios().subscribe(newUser=>{
    console.log(newUser);
    this.usuarios=Object.values(newUser);
    this.UsuarioService.setUsuarios(this.usuarios);
  }); /* Se hace un observable para poder obtener los datos de la base de datos
  y además se usa la función setUsuarios para evitar que al recargar la página
  no se borren los datos, esto lo hace creando un nuevo objeto */
}

usuarios:registro[]=[] /* Variable de tipo registro (la clase creada) que es un array */

agregarUsuario():any{
  const user=this.pruebaForm.value;
  let newUser=new registro(user.nombre, user.email, user.password);
  this.UsuarioService.agregarUsuarioService(newUser);
} /* Se crea una variable para que se vincule con las variables del formGroup,
 luego otra variable que almacene los datos del texbox que están dentro del formgroup,
se usa el put para almacenar la info en la base de datos */

submit(){
  if(!this.pruebaForm.valid){
    alert('ingrese los datos')
  }else{
    console.log(this.pruebaForm.value)
  }
}
}
