export class registroProductos{
  constructor(nombreProducto:string, precio:number, descripcion:string){
    this.nombreProducto = nombreProducto;
    this.precio= precio;
    this.descripcion= descripcion;
  }

  nombreProducto:string="";
  precio:number=0;
  descripcion:string='';
}
