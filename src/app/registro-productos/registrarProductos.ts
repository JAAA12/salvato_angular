export class registroProductos{
  constructor(imagen:string,nombreProducto:string, precio:number, descripcion:string, id:number){
    this.imagen=imagen;
    this.nombreProducto = nombreProducto;
    this.precio= precio;
    this.descripcion= descripcion;
    this.id=0
  }

  imagen:string="";
  nombreProducto:string="";
  precio:number=0;
  descripcion:string='';
  id=0;
}
