import { Attribute, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { DataService } from '../DataService';
import { UsuariosService } from "../usuarios.service";
import { registroProductos } from "../registro-productos/registrarProductos";


@Component({
  selector: 'app-modificar-productos',
  templateUrl: './modificar-productos.component.html',
  styleUrls: ['./modificar-productos.component.scss']
})
export class ModificarProductosComponent {
  constructor(private usuarioService:UsuariosService, private dataService:DataService){
    this.usuarioService.obtenerProductos().subscribe(newProduct=>{
      console.log(newProduct);
      this.productos=Object.values(newProduct);

      this.usuarioService.setProductos(this.productos);
    });
  }

  productos:registroProductos[]=[];
  actualizarProduct():any{
      let product=new registroProductos(this.imagen, this.nombreProducto, this.precio, this.descripcion, this.i);

      this.usuarioService.actualizarProductos(this.i, product);
      /* this.router.navigate(['']) */
}
nombreProducto:string="";
precio:number=0;
descripcion:string="";
imagen:string='';
i:number=0;
}
