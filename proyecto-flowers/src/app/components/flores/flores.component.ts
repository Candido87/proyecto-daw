import { Component, OnInit } from '@angular/core';
import { Flores } from '../../models/flores.model';
import { FloresService } from '../../services/flores/flores.service';

@Component({
  selector: 'app-flores',
  templateUrl: './flores.component.html',
  styleUrls: ['./flores.component.css']
})
export class FloresComponent implements OnInit {
    public products: Flores[] = [];
    public showMessage: boolean = false;

    constructor(private floresService: FloresService) {}

    ngOnInit(): void {
        this.products = this.floresService.getProducts();
    }

    addToCart(product: Flores): void {
        this.floresService.addToCart(product);
        this.showMessage = true; 

        setTimeout(() => {
            this.showMessage = false;
        }, 3000);
    }

}
