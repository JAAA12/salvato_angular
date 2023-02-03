import { Attribute, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { DataService } from '../DataService';
import { UsuariosService } from "../usuarios.service";
import { registroProductos } from "../registro-productos/registrarProductos";

@Component({
  selector: 'productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {
  /*[innerHtml]="htmlToAdd"  htmlToAdd = '<div class="two">two</div>'; *//* cambiar la info html */
 // @ViewChild('asTitle') title?: ElementRef;

  constructor(private render2:Renderer2, private dataservice:DataService, private usuarioService:UsuariosService){
    this.usuarioService.obtenerProductos().subscribe(newProduct=>{
      console.log(newProduct);
      this.productos=Object.values(newProduct);

      this.usuarioService.setProductos(this.productos);
    });

    /* let productI:registroProductos=this.usuarioService.encontrarProducto(i); */
  }


  productos:registroProductos[]=[]
 // mostrar(){
 //   const asTitle = this.title?.nativeElement;
  //  console.log(asTitle);
    /* selecciona la info de una etiqueta html, es como el document.querySelector (renderer2 angular)*/

    /* asTitle.setAttribute('src', '../assets/babka_veleno.jpg') */ /* cambia la propiedad que ud quiera cambiar */
 // }

 /* verSiSirve(){
  console.log(this.dataservice.cargarProductos)

  } */


   /* @ViewChild('carro') carrito?: ElementRef;   contenedorCarrito = document.querySelector('#lista-carrito tbody');
   @ViewChild('thead') totalCarrito?: ElementRef;
   @ViewChild('vaciarCarrito') VaciarCarritoBtn?: ElementRef;
   @ViewChild('ListaProductos') liProductos?: ElementRef;
   @ViewChild('vaciar') vaciar?: ElementRef;
   grecibo = document.querySelector('#grecibo')
    articuloCarrito = [];
    totalPedido = 0;
*/
@ViewChild('asTitle') title?: ElementRef;
@ViewChild('id') id?: ElementRef;

llenarCarritoHTML(){
  //borrar el HTML del contenedor
  const asTitle = this.title?.nativeElement;
this.productos.forEach(producto =>{
  const fila = document.createElement("tr");
  fila.innerHTML = `
  <td> <img src=${producto.imagen} width="90"></td>
  <td> ${producto.nombreProducto} </td>
  <td> ${producto.precio} </td>
  `;
  asTitle.appendChild(fila);
});
const id = this.id?.nativeElement;
console.log(id)
};


}
