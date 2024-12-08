import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FloresComponent } from './components/flores/flores.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { RamosComponent } from './components/ramos/ramos.component';
import { FuneralesComponent } from './components/funerales/funerales.component';
import { BodasComponent } from './components/bodas/bodas.component';
import { PasarelaPagoComponent } from './components/pasarela-pago/pasarela-pago.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'flores', component: FloresComponent},
  { path: 'cart', component: CarritoComponent},
  { path: 'ramos', component: RamosComponent},
  { path: 'funerales', component: FuneralesComponent},
  { path: 'bodas', component: BodasComponent },
  { path: 'pago', component: PasarelaPagoComponent }

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
