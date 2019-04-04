import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  {path:'inicio', component: InicioComponent},
  {path:'', redirectTo:'inicio', pathMatch:'full'},
  {path:'productos', component: ProductosComponent},
  {path:'**', component: TiendaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
