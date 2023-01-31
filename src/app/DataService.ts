import { HttpClient } from "@angular/common/http";
import { ElementRef, Injectable } from "@angular/core";
import { registro } from "./registrarse/registrarUsuario";

@Injectable()

export class DataService{

  constructor(private httpClient:HttpClient){}

  guardarUsuarios(usuarios:registro[]){
    this.httpClient.put('https://salvato-e00a7-default-rtdb.firebaseio.com/usuarios.json',usuarios).subscribe({
     next: response=>{console.log('se guardaron los empleados: '+ response);},
     error:error=> {console.log('Error: '+ error)}
  });
  }
}
