import { Inject, Injectable } from "@angular/core";
import { registro } from "./registrarse/registrarUsuario";
import { DataService } from "./DataService";

@Injectable()

export class UsuariosService{

  usuarios:registro[]=[]
  constructor(private dataService:DataService){}

  setUsuarios(newUser:registro[]){
    this.usuarios=newUser;
  }

  agregarUsuarioService(newUser:registro){
    this.usuarios.push(newUser);
    this.dataService.guardarUsuarios(this.usuarios);
    alert('Se registró correctamente')
  }

  obtenerUsuarios(){
    return this.dataService.cargarUsuarios();
  }
}
