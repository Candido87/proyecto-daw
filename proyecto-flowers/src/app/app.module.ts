import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloresComponent } from './components/flores/flores.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { RamosComponent } from './components/ramos/ramos.component';
import { FuneralesComponent } from './components/funerales/funerales.component';
import { BodasComponent } from './components/bodas/bodas.component';
import { PasarelaPagoComponent } from './components/pasarela-pago/pasarela-pago.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FloresComponent,
    CarritoComponent,
    RamosComponent,
    FuneralesComponent,
    BodasComponent,
    PasarelaPagoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
