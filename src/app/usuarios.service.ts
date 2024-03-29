import { Inject, Injectable } from "@angular/core";
import { registro } from "./registrarse/registrarUsuario";
import { registroProductos } from "./registro-productos/registrarProductos";
import { DataService } from "./DataService";
import { Observable, Subject } from "rxjs";

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

  actualizarProductos(i:number, productos:registroProductos){
    let productoModificado=this.productos[i];

    productoModificado.nombreProducto=productos.nombreProducto;
    productoModificado.precio=productos.precio;
    productoModificado.descripcion=productos.descripcion;
    productoModificado.imagen=productos.imagen;

    this.dataService.modificarProductos(i,productos);
  }
  encontrarProducto(i:number){
    let product:registroProductos=this.productos[i];
    return product;
}

eliminarProducto(i:number){
  this.productos.splice(i,1);
  this.dataService.eliminarProducto(i);
  if(this.productos!=null){
    this.dataService.guardarProductos(this.productos);
  }
}

idProducto(i:number, pro:registroProductos){
  let producto=this.productos[i];

  producto.descripcion=pro.descripcion;
  producto.id=i;
  producto.imagen=pro.imagen;
  producto.nombreProducto=pro.nombreProducto;
  producto.precio=pro.precio;
  this.dataService.idProducto(i)
}

}
