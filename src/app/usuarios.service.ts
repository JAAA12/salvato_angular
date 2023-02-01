import { Inject, Injectable } from "@angular/core";
import { registro } from "./registrarse/registrarUsuario";
import { registroProductos } from "./registro-productos/registrarProductos";
import { DataService } from "./DataService";

@Injectable()

export class UsuariosService{

  usuarios:registro[]=[]
  constructor(private dataService:DataService){}
  /* Registro de usuario */
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
  /* // */

  /* Registro Productos */

  productos:registroProductos[]=[]

  setProductos(newProduct:registroProductos[]){
    this.productos=newProduct;
  }

  agregarProductoService(newProduct:registroProductos){
    this.productos.push(newProduct);
    this.dataService.guardarProductos(this.productos);
    alert('Se registró correctamente')
  }

  obtenerProductos(){
    return this.dataService.cargarProductos();
  }
}
