import { Component, OnInit } from '@angular/core';
import { RamosService } from '../../services/ramos/ramos.service';
import { Ramos } from '../../models/flores.model';

@Component({
  selector: 'app-ramos',
  templateUrl: './ramos.component.html',
  styleUrls: ['./ramos.component.css']
})
export class RamosComponent implements OnInit {

  public products: Ramos[] = [];
  public showMessage: boolean = false;

  constructor(private ramosService: RamosService) {}
  
  
  ngOnInit(): void {
    this.products = this.ramosService.getProducts();  
  }

  addToCart(product: Ramos): void {
    this.ramosService.addToCart(product);
    this.showMessage = true; 

    setTimeout(() => {
        this.showMessage = false;
    }, 3000);
  }

}
