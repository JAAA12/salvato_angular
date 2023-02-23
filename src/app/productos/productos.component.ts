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
  /*[innerHtml]="htmlToAdd"  htmlToAdd = '<div class="two">two</div>'; *//* cambiar la info html */
 // @ViewChild('asTitle') title?: ElementRef;

  constructor(private render2:Renderer2, private dataservice:DataService, private usuarioService:UsuariosService){
    this.usuarioService.obtenerProductos().subscribe((data)=>{

      const pro = data;
      console.log(pro);
      this.productos=Object.values(data);

      this.usuarioService.setProductos(this.productos);

    });

    /* let productI:registroProductos=this.usuarioService.encontrarProducto(i); */
  }

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.



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
@ViewChild('id') id: number;
@ViewChild('totalCarrito') totalCarrito:ElementRef;

llenarCarritoHTML(id:number){
  //borrar el HTML del contenedor
  const asTitle = this.title?.nativeElement;
this.productos.forEach(producto =>{
  const fila = document.createElement("tr");
  fila.innerHTML = `
  <td> <img src=${producto.imagen} width="90"></td>
  <td> ${producto.nombreProducto} </td>
  <td> ${producto.precio} </td>
  <td> <a href= "#" class="borrar-curso" data-id="${producto.id}">X</td>
  `;
  asTitle.appendChild(fila);
});
/* const id = this.id.valueOf; */
/* console.log(this.usuarioService.idProducto(id)) */
};
pro?:Observable<registroProductos[]>;

carrito(){
  //this.dataservice.idProducto().pipe(map<registro, URL>(project: ( registroProductos) => unknown))

}

mostrar(i:number){
  const asTitle = this.title?.nativeElement;
  const totalCarrito = this.totalCarrito.nativeElement;
  let cantidad = 1;
  let totalPedido=0;

  this.dataservice.idProducto(i).forEach(producto =>{

    let total = producto.precio * cantidad;
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
