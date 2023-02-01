/* Clase que crea las variables en las que se va a almacenar la información
de cada textbox */

export class registro{
  constructor(nombre:string, email:string, password:string){
    this.nombre = nombre;
    this.email= email;
    this.password= password;
  }

  nombre:string="";
  email:string="";
  password:string='';
}
