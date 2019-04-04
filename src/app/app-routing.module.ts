import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  {path:'inicio', component: InicioComponent},
  {path:'', redirectTo:'inicio', pathMatch:'full'},
  {path:'contacto', component: ContactoComponent},
  {path:'ubicacion', component: UbicacionComponent},
  {path:'tienda', component:TiendaComponent},
  {path:'productos', component: ProductosComponent},
  {path:'**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
