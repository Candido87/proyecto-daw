import { Component, OnInit } from '@angular/core';
import { Bodas, Flores, Funerales, Ramos } from '../../models/flores.model';
import { FloresService } from '../../services/flores/flores.service';
import { RamosService } from '../../services/ramos/ramos.service';
import { FuneralesService } from '../../services/funerales/funerales.service';
import { BodasService } from '../../services/bodas/bodas.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
    public cart: Flores[] = [];
    public ramos: Ramos[] = [];
    public funerales: Funerales [] = [];
    public bodas: Bodas [] = [];
    public groupedCart: { product: Flores, quantity: number }[] = [];
    public groupedCartBodas: { product: Bodas, quantity: number }[] = [];
    public groupedCartFunerales: { product: Funerales, quantity: number }[] = [];
    public groupedCartRamos: { product: Ramos, quantity: number }[] = [];
    

    constructor(private floresService: FloresService,
      private ramosService: RamosService,
      private funeralService: FuneralesService,
      private bodasService: BodasService
    ) {}

    ngOnInit(): void {
        this.cart = this.floresService.getCart();
        this.ramos = this.ramosService.getCart();
        this.funerales = this.funeralService.getCart();
        this.bodas = this.bodasService.getCart();
        this.groupCart();
        this.groupCartBodas();
        this.groupCartFuneral();
        this.groupCartRamos();
    }

    public getTotal(): number {
        return this.floresService.getTotal();
    }

    public getTotalRamos(): number {
      return this.ramosService.getTotal();
    }

    public getTotalCoronas(): number {
      return this.funeralService.getTotal();
    }

    public getTotalBodas(): number {
      return this.bodasService.getTotal();
    }

    public clearCart(): void {
      this.floresService.clearCart();
      this.bodasService.clearCart();
      this.funeralService.clearCart();
      this.ramosService.clearCart();
      this.cart = []; 
      this.ramos = []; 
      this.funerales = [];
      this.bodas = [];
    }

    public removeFromCart(product: Flores): void {
      this.floresService.removeFromCart(product);
      this.cart = this.cart.filter(item => item !== product);
      this.groupCart();
    }

    public removeFromRamos(product: Ramos): void {
      this.ramosService.removeFromCart(product);
      this.ramos = this.ramos.filter(item => item !== product);
      this.groupCartRamos();
    }

    public removeFromCoronas(product: Funerales): void {
      this.funeralService.removeFromCart(product);
      this.funerales = this.funerales.filter(item => item !== product);
      this.groupCartFuneral();
    }

    public removeBodas(product: Bodas): void {
      this.bodasService.removeFromCart(product);
      this.bodas = this.bodas.filter(item => item !== product);
      this.groupCartBodas();
    }

    getGrandTotal(): number {
      const totalCart = this.cart ? this.getTotal() : 0;
      const totalRamos = this.ramos ? this.getTotalRamos() : 0;
      const totalCoronas = this.funerales ? this.getTotalCoronas() : 0;
      const totalBodas = this.bodas? this.getTotalBodas() : 0;
    
      return totalCart + totalRamos + totalCoronas + totalBodas;
    }

    floresCount(): number  {
      return this.floresService.getCart().length;
    }

    public groupCart(): void {
      const grouped = this.cart.reduce((acc, item) => {
        const found = acc.find(i => i.product.id === item.id);
        if (found) {
          found.quantity++;
        } else {
          acc.push({ product: item, quantity: 1 });
        }
        return acc;
      }, [] as { product: Flores, quantity: number }[]);
      this.groupedCart = grouped;
    }

    public addFlores(product: Flores) {
      this.floresService.addToCart(product)
    }

    public groupCartBodas(): void {
      const grouped = this.bodas.reduce((acc, item) => {
        const found = acc.find(i => i.product.id === item.id);
        if (found) {
          found.quantity++;
        } else {
          acc.push({ product: item, quantity: 1 });
        }
        return acc;
      }, [] as { product: Bodas, quantity: number }[]);
      this.groupedCartBodas = grouped;
    }

    public bodasCount(): number  {
      return this.bodasService.getCart().length;
    }

    public addBodas(product: Bodas) {
      this.bodasService.addToCart(product)
    }

    public groupCartFuneral(): void {
      const grouped = this.funerales.reduce((acc, item) => {
        const found = acc.find(i => i.product.id === item.id);
        if (found) {
          found.quantity++;
        } else {
          acc.push({ product: item, quantity: 1 });
        }
        return acc;
      }, [] as { product: Bodas, quantity: number }[]);
      this.groupedCartFunerales = grouped;
    }

    public funeralesCount(): number  {
      return this.funeralService.getCart().length;
    }

    public addFunerales(product: Bodas) {
      this.funeralService.addToCart(product)
    }

    public groupCartRamos(): void {
      const grouped = this.ramos.reduce((acc, item) => {
        const found = acc.find(i => i.product.id === item.id);
        if (found) {
          found.quantity++;
        } else {
          acc.push({ product: item, quantity: 1 });
        }
        return acc;
      }, [] as { product: Bodas, quantity: number }[]);
      this.groupedCartRamos = grouped;
    }

    public ramosCount(): number  {
      return this.ramosService.getCart().length;
    }

    public addRamos(product: Bodas) {
      this.ramosService.addToCart(product)
    }
    
    
}

