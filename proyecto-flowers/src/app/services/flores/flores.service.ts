import { Injectable } from '@angular/core';
import { Flores } from '../../models/flores.model';


@Injectable({
    providedIn: 'root',
})
export class FloresService {
    private cart: Flores[] = [];
    private products: Flores[] = [
        {
            id: 1,
            name: 'Rosa Roja',
            price: 10.0,
            image: '../assets/images/flores/rosa.jpg',
            description: 'Hermosa rosa roja para regalar.',
        },
        {
            id: 2,
            name: 'Tulipán Amarillo',
            price: 8.5,
            image: '../assets/images/flores/tulipan.jpg',
            description: 'Tulipán amarillo lleno de energía.',
        },
        {
            id: 3,
            name: 'Lirio Blanco',
            price: 12.0,
            image: '../assets/images/flores/lirio.jpg',
            description: 'Lirio blanco, símbolo de pureza y paz.',
        },
        {
            id: 4,
            name: 'Orquídea Violeta',
            price: 15.0,
            image: '../assets/images/flores/orquidea.jpg',
            description: 'Orquídea violeta, elegante y sofisticada.',
        },
        {
            id: 5,
            name: 'Margarita Blanca',
            price: 7.0,
            image: '../assets/images/flores/lirio.jpg',
            description: 'Margarita blanca, simple y llena de belleza.',
        },
        {
            id: 6,
            name: 'Girasol',
            price: 9.0,
            image: '../assets/images/flores/girasol.jpg',
            description: 'Girasol, símbolo de alegría y luz.',
        },
        {
            id: 7,
            name: 'Clavel Rojo',
            price: 11.5,
            image: '../assets/images/flores/clavelRojo.jpg',
            description: 'Clavel rojo, pasión y romanticismo.',
        },
        {
            id: 8,
            name: 'Violetas',
            price: 6.0,
            image: '../assets/images/flores/violeta.jpg',
            description: 'Violetas, delicadeza y hermosura en un solo ramo.',
        },
        {
            id: 9,
            name: 'Lirio Rojo',
            price: 13.0,
            image: '../assets/images/flores/liriRojo.jpg',
            description: 'Lirio rosa, elegancia y suavidad.',
        },
        {
            id: 10,
            name: 'Tulipán Rojo',
            price: 9.5,
            image: '../assets/images/flores/tulipanRojo.jpg',
            description: 'Tulipán rojo, simboliza amor eterno.',
        },
        {
            id: 11,
            name: 'Peonía',
            price: 18.0,
            image: '../assets/images/flores/peonia.jpg',
            description: 'Peonía, símbolo de riqueza y prosperidad.',
        },
        {
            id: 12,
            name: 'Crisántemo',
            price: 7.5,
            image: '../assets/images/flores/Crisántemo.jpg',
            description: 'Crisántemo, flor de la longevidad y la vitalidad.',
        },
        {
            id: 13,
            name: 'Dalia Roja',
            price: 14.0,
            image: '../assets/images/flores/DaliaRoja.jpg',
            description: 'Dalia roja, pasión y fuerza.',
        },
        {
            id: 14,
            name: 'Jazmín Blanco',
            price: 10.5,
            image: '../assets/images/flores/JazmínBlanco.jpg',
            description: 'Jazmín blanco, fragancia suave y delicada.',
        },
        {
            id: 15,
            name: 'Lavanda',
            price: 8.0,
            image: '../assets/images/flores/Lavanda.jpg',
            description: 'Lavanda, frescura y calma.',
        },
        {
            id: 16,
            name: 'Azucena',
            price: 11.0,
            image: '../assets/images/flores/Azucena.jpg',
            description: 'Azucena, simboliza belleza y frescura.',
        },
        {
            id: 17,
            name: 'Gerbera Amarilla',
            price: 9.0,
            image: '../assets/images/flores/GerberaAmarilla.jpg',
            description: 'Gerbera amarilla, flor vibrante y llena de vida.',
        },
        {
            id: 18,
            name: 'Gardenia',
            price: 16.0,
            image: '../assets/images/flores/Gardenia.jpg',
            description: 'Gardenia, fragancia intensa y delicada.',
        },
        {
            id: 19,
            name: 'Fresia',
            price: 8.5,
            image: '../assets/images/flores/Fresia.jpg',
            description: 'Fresia, flor de la amistad y la sinceridad.',
        },
        {
            id: 20,
            name: 'Hortensia',
            price: 14.5,
            image: '../assets/images/flores/Hortensia.jpg',
            description: 'Hortensia, flor que simboliza gratitud y entendimiento.',
        },
        {
            id: 21,
            name: 'Camelia',
            price: 18.5,
            image: '../assets/images/flores/Camelia.jpg',
            description: 'Camelia, simboliza amor incondicional.',
        },
        {
            id: 22,
            name: 'Anémona',
            price: 12.5,
            image: '../assets/images/flores/Anémona.jpg',
            description: 'Anémona, flor que simboliza el amor eterno.',
        },
    ];
    


    getProducts(): Flores[] {
        return this.products;
    }

    addToCart(product: Flores): void {
        const newProduct = { ...product, quantity: 1 };
        this.cart.push(newProduct);
    }

    getCart(): Flores[] {
        return this.cart;
    }

    getTotal(): number {
        return this.cart.reduce((sum, item) => sum + item.price, 0);
    }

    public removeFromCart(product: Flores): void {
        this.cart = this.cart.filter(item => item !== product)
    }
      
    clearCart(): void {
        this.cart = [];
    }    
    
}
