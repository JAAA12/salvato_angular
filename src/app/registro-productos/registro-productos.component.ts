import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { registroProductos } from "./registrarProductos";
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-registro-productos',
  templateUrl: './registro-productos.component.html',
  styleUrls: ['./registro-productos.component.scss']
})
export class RegistroProductosComponent {
  pruebaForm:FormGroup;

constructor(private builder:FormBuilder, private UsuarioService:UsuariosService){
  this.pruebaForm=this.builder.group({
    imagen:['', Validators.required],
    nombreProducto:['',[Validators.required,Validators.maxLength(35)]],
    precio:[0, Validators.required],
    descripcion:['', [Validators.required, Validators.maxLength(50)]],
    id:[registroProductos.length + 1]
  });

  this.UsuarioService.obtenerProductos().subscribe(newProduct=>{
    console.log(newProduct);
    this.productos=Object.values(newProduct);
    this.UsuarioService.setProductos(this.productos);
  });
}
;

productos:registroProductos[]=[]

agregarProducto():any{
  const product=this.pruebaForm.value;
  let newProduct=new registroProductos(product.imagen,product.nombreProducto, product.precio, product.descripcion, product.id);

  this.UsuarioService.agregarProductoService(newProduct);
}

submit(){
  if(!this.pruebaForm.valid){
    alert('ingrese los datos')
  }else{
    console.log(this.pruebaForm.value)
  }
}


}
