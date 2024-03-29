import { Attribute, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { DataService } from '../DataService';
import { UsuariosService } from "../usuarios.service";
import { ActivatedRoute, Router } from '@angular/router';
import { registroProductos } from "../registro-productos/registrarProductos";

@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-productos.component.html',
  styleUrls: ['./editar-productos.component.scss']
})
export class EditarProductosComponent {

  constructor(private usuarioService:UsuariosService, private dataService:DataService, private router:Router, private route:ActivatedRoute){
    this.i=this.route.snapshot.params['id']

    let product:registroProductos=this.usuarioService.encontrarProducto(this.i);

    this.nombreProducto=product.nombreProducto;
    this.descripcion=product.descripcion;
    this.precio=product.precio;
    this.imagen=product.imagen;

    /* this.accion=parseInt(this.route.snapshot.queryParams['accion']); */


    this.usuarioService.obtenerProductos().subscribe(newProduct=>{
      console.log(newProduct);
      this.productos=Object.values(newProduct);

      this.usuarioService.setProductos(this.productos);
    });
  }

  productos:registroProductos[]=[];
/*   accion:number; */
  actualizarProduct(){
      let product=new registroProductos(this.imagen, this.nombreProducto, this.precio, this.descripcion, this.i);

      this.usuarioService.actualizarProductos(this.i, product);
      this.router.navigate(['/modificarProductos'])
}

eliminarProduct(){
  this.usuarioService.eliminarProducto(this.i);
  this.productos.splice(this.i,1)
  this.router.navigate(['/productos'])
}
nombreProducto:string="";
precio:number=0;
descripcion:string="";
imagen:string='';
i:number=0;

volver(){
  this.router.navigate(['/modificarProductos'])
}
}
