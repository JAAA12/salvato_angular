import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatMenuModule } from "@angular/material/menu";
import { HomeComponent } from './home/home.component';
import { RouterModule,Routes } from '@angular/router';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';


const appRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'nosotros', component:NosotrosComponent},
  {path:'productos', component:ProductosComponent},
  {path:'ubicacion', component:UbicacionComponent},
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
