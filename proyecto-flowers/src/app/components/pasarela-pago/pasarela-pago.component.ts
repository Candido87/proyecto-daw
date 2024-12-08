import { Component } from '@angular/core';
import { FloresService } from '../../services/flores/flores.service';
import { RamosService } from '../../services/ramos/ramos.service';
import { FuneralesService } from '../../services/funerales/funerales.service';
import { BodasService } from '../../services/bodas/bodas.service';
import { Flores, Ramos, Funerales, Bodas } from '../../models/flores.model';

@Component({
  selector: 'app-pasarela-pago',
  templateUrl: './pasarela-pago.component.html',
  styleUrls: ['./pasarela-pago.component.css']
})
export class PasarelaPagoComponent {
  cart: Flores[] = [];
  ramos: Ramos[] = [];
  funerales: Funerales[] = [];
  bodas: Bodas[] = [];
  customerName = '';
  address = '';
  paymentMethod = 'card';
  cardNumber = '';
  paypalEmail = '';
  transferReference = '';
  paymentSuccess = false;

  constructor(
    private floresService: FloresService,
    private ramosService: RamosService,
    private funeralesService: FuneralesService,
    private bodasService: BodasService
  ) {}

  ngOnInit(): void {
    this.cart = this.floresService.getCart();
    this.ramos = this.ramosService.getCart();
    this.funerales = this.funeralesService.getCart();
    this.bodas = this.bodasService.getCart();
  }

  getTotal(): number {
    const totalFlores = this.cart.reduce((sum, item) => sum + item.price, 0);
    const totalRamos = this.ramos.reduce((sum, item) => sum + item.price, 0);
    const totalFunerales = this.funerales.reduce((sum, item) => sum + item.price, 0);
    const totalBodas = this.bodas.reduce((sum, item) => sum + item.price, 0);
    return totalFlores + totalRamos + totalFunerales + totalBodas;
  }

  processPayment(): void {
    if (
      this.cart.length > 0 ||
      this.ramos.length > 0 ||
      this.funerales.length > 0 ||
      this.bodas.length > 0
    ) {

      this.paymentSuccess = true;

      this.floresService.clearCart();
      this.ramosService.clearCart();
      this.funeralesService.clearCart();
      this.bodasService.clearCart();

      this.cart = [];
      this.ramos = [];
      this.funerales = [];
      this.bodas = [];
    }
  }
}
