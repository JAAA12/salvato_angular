import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatMenuModule } from "@angular/material/menu";
import { HomeComponent } from './home/home.component';
import { RouterModule,Routes } from '@angular/router';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { DataService } from './DataService';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { UsuariosService } from "./usuarios.service";
import { RegistroProductosComponent } from './registro-productos/registro-productos.component';
import { EditarProductosComponent } from './editar-productos/editar-productos.component';
import { ModificarProductosComponent } from './modificar-productos/modificar-productos.component';

const appRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'nosotros', component:NosotrosComponent},
  {path:'productos', component:ProductosComponent},
  {path:'ubicacion', component:UbicacionComponent},
  {path:'registrarUsuario', component:RegistrarseComponent},
  {path:'login', component:LoginComponent},
  {path:'registroProductos', component:RegistroProductosComponent},
  {path:'actualizarProductos/:id', component:EditarProductosComponent},
  {path:'modificarProductos', component:ModificarProductosComponent}
  /* los asterístcos le dicen que si es diferente */
   /* el path del error debe ir SIEMPRE de último */
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NosotrosComponent,
    ProductosComponent,
    UbicacionComponent,
    LoginComponent,
    RegistrarseComponent,
    RegistroProductosComponent,
    EditarProductosComponent,
    ModificarProductosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService,UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
