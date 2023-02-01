export class registroProductos{
  constructor(imagen:string,nombreProducto:string, precio:number, descripcion:string){
    this.imagen=imagen;
    this.nombreProducto = nombreProducto;
    this.precio= precio;
    this.descripcion= descripcion;
  }

  imagen:string="";
  nombreProducto:string="";
  precio:number=0;
  descripcion:string='';
}
