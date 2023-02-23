import { Attribute, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { DataService } from '../DataService';
import { UsuariosService } from "../usuarios.service";
import { registroProductos } from "../registro-productos/registrarProductos";
import { map, Observable } from 'rxjs';
import { registro } from '../registrarse/registrarUsuario';

@Component({
  selector: 'productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {


  constructor(private render2:Renderer2, private dataservice:DataService, private usuarioService:UsuariosService){
    this.usuarioService.obtenerProductos().subscribe((data)=>{
      const pro = data;
      console.log(pro);
      this.productos=Object.values(data);
      this.usuarioService.setProductos(this.productos);
    });//Acá se cargan obtiene la información de los productos y los muestra
  }


productos:registroProductos[]=[]

//El viewChild es como el queySelector de JS
@ViewChild('asTitle') title?: ElementRef;
@ViewChild('id') id: number;
@ViewChild('totalCarrito') totalCarrito:ElementRef;


agregarCarrito(i:number){
  const asTitle = this.title?.nativeElement;
  const totalCarrito = this.totalCarrito.nativeElement;
  let totalPedido=0;

  this.dataservice.idProducto(i).forEach(producto =>{

    let cantidad = producto.cantidad++;
    let total = producto.precio * producto.cantidad;
    const fila = document.createElement("tr");

    fila.innerHTML = `
    <td> <img src=${producto.imagen} width="90"></td>
    <td> ${producto.nombreProducto} </td>
    <td> ${producto.precio} </td>
    <td> ${cantidad} </td>
    <td> ${total} </td>
    <td> <a href= "#" class="borrar-curso" data-id="${producto.id}">X${producto.id}</td>
    `;

    totalPedido = totalPedido + total;

    const filaTotal = document.createElement('tr');
    filaTotal.innerHTML = `
    <td>Total Pedido: ${totalPedido} </td>
    `;
    asTitle.appendChild(fila);
    this.limpiarHtmlTotal();
    totalCarrito.appendChild(filaTotal);
  });

}

limpiarHtmlTotal(){
  const totalCarrito = this.totalCarrito.nativeElement;
  totalCarrito.innerHTML = "";
};
}
