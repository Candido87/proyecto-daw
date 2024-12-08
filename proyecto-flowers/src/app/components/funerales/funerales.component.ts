import { Component, OnInit } from '@angular/core';
import { Funerales } from '../../models/flores.model';
import { FuneralesService } from '../../services/funerales/funerales.service';

@Component({
  selector: 'app-funerales',
  templateUrl: './funerales.component.html',
  styleUrls: ['./funerales.component.css']
})
export class FuneralesComponent implements OnInit {

  public products: Funerales[] = [];
  public showMessage: boolean = false;

  constructor(private funeralesService: FuneralesService) {}
  
  ngOnInit(): void {
    this.products = this.funeralesService.getProducts();  
  }

  addToCart(product: Funerales): void {
    this.funeralesService.addToCart(product);
    this.showMessage = true; 

    setTimeout(() => {
        this.showMessage = false;
    }, 3000);
  }


}
