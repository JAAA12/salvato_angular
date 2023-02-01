import { HttpClient } from "@angular/common/http";
import { ElementRef, Injectable } from "@angular/core";
import { registro } from "./registrarse/registrarUsuario";
import { registroProductos } from "./registro-productos/registrarProductos";

@Injectable()

export class DataService{

  constructor(private httpClient:HttpClient){}

/* Registro de usuario */
  guardarUsuarios(usuarios:registro[]){
    this.httpClient.put('https://salvato-e00a7-default-rtdb.firebaseio.com/usuarios.json',usuarios).subscribe({
     next: response=>{console.log('se guardaron los empleados: '+ response);},
     error:error=> {console.log('Error: '+ error)}
  });
  }

  cargarUsuarios(){

    /* const token=this.loginService.getIdToken(); */
    return this.httpClient.get('https://salvato-e00a7-default-rtdb.firebaseio.com/usuarios.json');
  }
/* // */

/* Registro Productos */

guardarProductos(productos:registroProductos[]){
  this.httpClient.put('https://salvato-e00a7-default-rtdb.firebaseio.com/productos.json',productos).subscribe({
   next: response=>{console.log('se guardaron los empleados: '+ response);},
   error:error=> {console.log('Error: '+ error)}
});
}

cargarProductos(){
  return this.httpClient.get('https://salvato-e00a7-default-rtdb.firebaseio.com/productos.json');
}

}
