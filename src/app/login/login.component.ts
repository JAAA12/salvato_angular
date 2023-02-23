import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { registro } from '../registrarse/registrarUsuario';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private usuarioService: UsuariosService){
    this.usuarioService.obtenerUsuarios().subscribe(newUser=>{
      console.log(newUser);
      this.usuarios=Object.values(newUser);
      this.usuarioService.setUsuarios(this.usuarios);
    });
  }

usuarios:registro[]=[];

login = new FormGroup({
  email: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required)
})
 condicion?:number;
 valor(){
  console.log(this.condicion)
 }

 loginUsuario(){
  console.log(this.login.value)

  //this.usuarioService.idProducto()
 }

}
