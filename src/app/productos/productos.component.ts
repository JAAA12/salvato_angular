import { Attribute, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { DataService } from '../DataService';


@Component({
  selector: 'productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {
  /*[innerHtml]="htmlToAdd"  htmlToAdd = '<div class="two">two</div>'; *//* cambiar la info html */
 // @ViewChild('asTitle') title?: ElementRef;

  constructor(private render2:Renderer2, private dataservice:DataService){}
 // mostrar(){
 //   const asTitle = this.title?.nativeElement;
  //  console.log(asTitle);
    /* selecciona la info de una etiqueta html, es como el document.querySelector (renderer2 angular)*/

    /* asTitle.setAttribute('src', '../assets/babka_veleno.jpg') */ /* cambia la propiedad que ud quiera cambiar */
 // }

 /* verSiSirve(){
  console.log(this.dataservice.cargarProductos)

  } */


   @ViewChild('carro') carrito?: ElementRef;   contenedorCarrito = document.querySelector('#lista-carrito tbody');
   @ViewChild('thead') totalCarrito?: ElementRef;
   @ViewChild('vaciarCarrito') VaciarCarritoBtn?: ElementRef;
   @ViewChild('ListaProductos') liProductos?: ElementRef;
   @ViewChild('vaciar') vaciar?: ElementRef;
   grecibo = document.querySelector('#grecibo')
    articuloCarrito = [];
    totalPedido = 0;


    cargarEvento(){

    };

    agregarProductos(e:any){
      e.preventDefault();
      if(e.target.classList.contains('agrgarCarrito')){
        const productoSeleccionado=e.target.parentElement.parentElement
        /* leerDatos(productoSeleccionado) */
      }
    };

    eliminarProducto(e:any){
      console.log(e.target.classList);
      if(e.target.classList.contains('borrar-curso')){
        const productoId = this.vaciar?.nativeElement;
        /* this.renderer2.setStyle(myButton, 'backgroundColor', 'yellow'); */
        productoId.selectRootElement('')
        console.log(productoId)
      }
    }

}
