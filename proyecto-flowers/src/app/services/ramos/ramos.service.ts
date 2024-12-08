import { Injectable } from '@angular/core';
import { Ramos } from 'src/app/models/flores.model';

@Injectable({
  providedIn: 'root'
})
export class RamosService {
  private ramos: Ramos[] = [];
  private products: Ramos[] = [
    {
        id: 1,
        name: 'Ramo Grande',
        price: 20,
        image: '../assets/images/ramos/ramo1.jpg',
        description: 'Hermoso ramo grande hecho con rosas.',
    },
    {
        id: 2,
        name: 'Ramo Pequeño',
        price: 11.5,
        image: '../assets/images/ramos/ramo2.jpg',
        description: 'Hermoso ramo pequeño hecho con rosas.',
    },
    {
        id: 3,
        name: 'Ramo Elegante',
        price: 35,
        image: '../assets/images/ramos/ramo3.jpg',
        description: 'Claveles blancos y lilas en perfecta combinación.',
    },
    {
        id: 4,
        name: 'Ramo Romántico',
        price: 28,
        image: '../assets/images/ramos/ramo4.jpg',
        description: 'Rosas rojas y blancas para una ocasión especial.',
    },
    {
        id: 5,
        name: 'Ramo Vibrante',
        price: 25,
        image: '../assets/images/ramos/ramo5.jpg',
        description: 'Girasoles brillantes y margaritas coloridas.',
    },
    {
        id: 6,
        name: 'Ramo Delicado',
        price: 18.5,
        image: '../assets/images/ramos/ramo6.jpg',
        description: 'Orquídeas suaves y flores de temporada.',
    },
    {
        id: 7,
        name: 'Ramo Campestre',
        price: 22,
        image: '../assets/images/ramos/ramo7.jpg',
        description: 'Flores silvestres con un toque natural.',
    },
    {
        id: 8,
        name: 'Ramo Aromático',
        price: 30,
        image: '../assets/images/ramos/ramo8.jpg',
        description: 'Lavanda fresca con flores aromáticas.',
    },
    {
        id: 9,
        name: 'Ramo Tropical',
        price: 40,
        image: '../assets/images/ramos/ramo9.jpg',
        description: 'Heliconias y anturios exóticos.',
    },
    {
        id: 10,
        name: 'Ramo Peonías',
        price: 50,
        image: '../assets/images/ramos/ramo10.jpg',
        description: 'Peonías rosadas y blancas de temporada.',
    },
    {
        id: 11,
        name: 'Ramo Elegancia Rosa',
        price: 27,
        image: '../assets/images/ramos/ramo11.jpg',
        description: 'Rosas rosadas y hojas verdes.',
    },
    {
        id: 12,
        name: 'Ramo Fantasía',
        price: 32,
        image: '../assets/images/ramos/ramo12.jpg',
        description: 'Lirios amarillos y flores púrpuras.',
    },
    {
        id: 13,
        name: 'Ramo Serenidad',
        price: 29,
        image: '../assets/images/ramos/ramo13.jpg',
        description: 'Flores blancas para transmitir paz y tranquilidad.',
    },
    {
        id: 14,
        name: 'Ramo Colorido',
        price: 24,
        image: '../assets/images/ramos/ramo14.jpg',
        description: 'Rosas, claveles y margaritas en varios colores.',
    },
    {
        id: 15,
        name: 'Ramo Alegría',
        price: 26.5,
        image: '../assets/images/ramos/ramo15.jpg',
        description: 'Rosas amarillas y flores del campo.',
    },
    {
        id: 16,
        name: 'Ramo Lujoso',
        price: 70,
        image: '../assets/images/ramos/ramo16.jpg',
        description: 'Rosas premium y orquídeas en un diseño exclusivo.',
    },
    {
        id: 17,
        name: 'Ramo de Novia',
        price: 90,
        image: '../assets/images/ramos/ramo17.jpg',
        description: 'Rosas blancas, peonías y eucalipto.',
    },
    {
        id: 18,
        name: 'Ramo de Primavera',
        price: 34,
        image: '../assets/images/ramos/ramo18.jpg',
        description: 'Tulipanes y flores de primavera.',
    },
    {
        id: 19,
        name: 'Ramo de Verano',
        price: 36,
        image: '../assets/images/ramos/ramo19.jpg',
        description: 'Girasoles y margaritas con colores cálidos.',
    },
    {
        id: 20,
        name: 'Ramo Exótico',
        price: 65,
        image: '../assets/images/ramos/ramo20.jpg',
        description: 'Flores raras y tropicales para una ocasión especial.',
    },
    {
        id: 21,
        name: 'Ramo Dulce',
        price: 19,
        image: '../assets/images/ramos/ramo21.jpg',
        description: 'Rosas pastel con flores lilas y blancas.',
    },
    {
        id: 22,
        name: 'Ramo de Sueños',
        price: 29.5,
        image: '../assets/images/ramos/ramo22.jpg',
        description: 'Rosas lavanda y flores violetas.',
    },
];

  constructor() { }

  getProducts(): Ramos[] {
    return this.products;
  }

  addToCart(product: Ramos): void {
    const newProduct = { ...product, quantity: 1 };
    this.ramos.push(newProduct);
  }

  getCart(): Ramos[] {
      return this.ramos;
  }

  getTotal(): number {
    return this.ramos.reduce((sum, item) => sum + item.price, 0);
  }

  removeFromCart(product: Ramos): void {
    this.ramos = this.ramos.filter(item => item !== product);
  }

  clearCart(): void {
      this.ramos = [];
  }


}
