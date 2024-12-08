import { Component, OnInit } from '@angular/core';
import { Bodas } from '../../models/flores.model';
import { BodasService } from '../../services/bodas/bodas.service';

@Component({
  selector: 'app-bodas',
  templateUrl: './bodas.component.html',
  styleUrls: ['./bodas.component.css']
})
export class BodasComponent implements OnInit {
  public products: Bodas[] = [];
  public showMessage: boolean = false;

  constructor(private bodasServices: BodasService) {}

  ngOnInit(): void {
    this.products = this.bodasServices.getProducts();
  }

  addToCart(product: Bodas): void {
    this.bodasServices.addToCart(product);
    this.showMessage = true; 

    setTimeout(() => {
        this.showMessage = false;
    }, 3000);
}
}
