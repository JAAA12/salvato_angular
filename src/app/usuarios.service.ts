import { Inject, Injectable } from "@angular/core";
import { registro } from "./registrarse/registrarUsuario";
import { DataService } from "./DataService";

@Injectable()

export class UsuariosService{

  usuarios:registro[]=[]
  constructor(private dataService:DataService){}
  agregarUsuarioService(newUser:registro){
    this.usuarios.push(newUser);
    this.dataService.guardarUsuarios(this.usuarios);
    alert('se agregó'+this.usuarios)
  }
}
