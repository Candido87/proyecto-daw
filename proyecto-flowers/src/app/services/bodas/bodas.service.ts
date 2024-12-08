import { Injectable } from '@angular/core';
import { Bodas } from '../../models/flores.model';

@Injectable({
  providedIn: 'root'
})
export class BodasService {
  private cart: Bodas[] = [];
  private products: Bodas[] = [
    {
        id: 1,
        name: 'Centro de boda grande',
        price: 12.0,
        image: '../assets/images/boda/centro1.webp',
        description: 'Cascada de rosas blancas y rosas para mesa nupcial.',
    },
    {
        id: 2,
        name: 'Centro de boda pequeño',
        price: 8.5,
        image: '../assets/images/boda/centro2.jpg',
        description: 'Ramo decorativo pequeño con flores variadas.',
    },
    {
        id: 3,
        name: 'Centro de boda romántico',
        price: 15.0,
        image: '../assets/images/boda/centro3.jpg',
        description: 'Centro de mesa con rosas blancas y rojas.',
    },
    {
        id: 4,
        name: 'Centro de boda elegante',
        price: 20.0,
        image: '../assets/images/boda/centro4.jpg',
        description: 'Centro con orquídeas y lirios para un toque elegante.',
    },
    {
        id: 5,
        name: 'Centro boda rústico',
        price: 14.5,
        image: '../assets/images/boda/centro5.jpg',
        description: 'Combinación de flores silvestres y colores suaves.',
    },
    {
        id: 6,
        name: 'Centro boda vintage',
        price: 16.0,
        image: '../assets/images/boda/centro6.jpg',
        description: 'Centro con flores de lavanda y rosas vintage.',
    },
    {
        id: 7,
        name: 'Centro de boda con peonías',
        price: 22.0,
        image: '../assets/images/boda/centro7.jpg',
        description: 'Lujoso centro de boda con peonías y lirios.',
    },
    {
        id: 8,
        name: 'Centro de boda tropical',
        price: 19.0,
        image: '../assets/images/boda/centro8.jpg',
        description: 'Centro de mesa con flores tropicales y hojas verdes.',
    },
    {
        id: 9,
        name: 'Centro de boda blanco',
        price: 13.5,
        image: '../assets/images/boda/centro9.jpg',
        description: 'Centro con flores blancas y detalles en verde.',
    },
    {
        id: 10,
        name: 'Centro de boda con tulipanes',
        price: 17.0,
        image: '../assets/images/boda/centro10.jpg',
        description: 'Hermoso centro de boda con tulipanes de varios colores.',
    },
    {
        id: 11,
        name: 'Centro de boda romántico clásico',
        price: 18.5,
        image: '../assets/images/boda/centro11.jpg',
        description: 'Centro de boda con rosas y lirios blancos.',
    },
    {
        id: 12,
        name: 'Centro boda colorido',
        price: 21.0,
        image: '../assets/images/boda/centro12.jpg',
        description: 'Centro con una variedad de flores coloridas.',
    },
    {
        id: 13,
        name: 'Centro de boda bohemio',
        price: 23.0,
        image: '../assets/images/boda/centro13.jpg',
        description: 'Centro bohemio con flores secas y naturales.',
    },
    {
        id: 14,
        name: 'Centro de boda con margaritas',
        price: 12.5,
        image: '../assets/images/boda/centro14.jpg',
        description: 'Centro con margaritas blancas y detalles en verdes.',
    },
    {
        id: 15,
        name: 'Centro de boda minimalista',
        price: 25.0,
        image: '../assets/images/boda/centro15.jpg',
        description: 'Centro sencillo con un ramo pequeño de flores.',
    },
    {
        id: 16,
        name: 'Centro de boda con lilas',
        price: 18.0,
        image: '../assets/images/boda/centro16.jpg',
        description: 'Centro con lilas moradas y flores complementarias.',
    },
    {
        id: 17,
        name: 'Centro de boda chic',
        price: 27.0,
        image: '../assets/images/boda/centro17.jpg',
        description: 'Combinación de flores elegantes con detalles modernos.',
    },
    {
        id: 18,
        name: 'Centro de boda romántico vintage',
        price: 28.0,
        image: '../assets/images/boda/centro18.jpg',
        description: 'Centro de boda con rosas antiguas y toques de lavanda.',
    },
    {
        id: 19,
        name: 'Centro de boda delicado',
        price: 16.5,
        image: '../assets/images/boda/centro19.jpg',
        description: 'Centro delicado con flores de colores pasteles.',
    },
    {
        id: 20,
        name: 'Centro de boda con lirios rosas',
        price: 24.0,
        image: '../assets/images/boda/centro20.jpg',
        description: 'Centro con lirios rosas y flores adicionales en tonos suaves.',
    },
];


  constructor() { }

  getProducts(): Bodas[] {
      return this.products;
  }

  addToCart(product: Bodas): void {
    const newProduct = { ...product, quantity: 1 };
    this.cart.push(newProduct);
  }

  getCart(): Bodas[] {
      return this.cart;
  }

  getTotal(): number {
    return this.cart.reduce((sum, item) => sum + item.price, 0);
  }
  
  removeFromCart(product: Bodas): void {
    this.cart = this.cart.filter(item => item !== product);
  }

  clearCart(): void {
      this.cart = [];
  }
}
