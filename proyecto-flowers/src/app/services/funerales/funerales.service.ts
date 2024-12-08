import { Injectable } from '@angular/core';
import { Funerales } from '../../models/flores.model';

@Injectable({
  providedIn: 'root'
})
export class FuneralesService {
  private funeral: Funerales[] = [];
  private products: Funerales[] = [
    {
        id: 1,
        name: 'Corona Grande',
        price: 40,
        image: '../assets/images/coronas-funerarias/corona-funeral-roja.jpg',
        description: 'Hermosa corona grande de rosas roja para los difuntos.',
    },
    {
        id: 2,
        name: 'Corona Pequeña',
        price: 21.5,
        image: '../assets/images/coronas-funerarias/corona15.jpg',
        description: 'Hermosa corona pequeña de rosas roja para los difuntos.',
    },
    {
        id: 3,
        name: 'Corona Elegante',
        price: 45,
        image: '../assets/images/coronas-funerarias/corona-funeral-pastel.jpg',
        description: 'Corona de lirios blancos y rosas rosadas.',
    },
    {
        id: 4,
        name: 'Corona Serenidad',
        price: 50,
        image: '../assets/images/coronas-funerarias/corona-funeral-margaritas.jpg',
        description: 'Combinación de lirios, claveles y margaritas blancas.',
    },
    {
        id: 5,
        name: 'Corona de Paz',
        price: 55,
        image: '../assets/images/coronas-funerarias/corona-funeral-silvestre.jpg',
        description: 'Corona de rosas blancas con eucalipto.',
    },
    {
        id: 6,
        name: 'Corona Tropical',
        price: 60,
        image: '../assets/images/coronas-funerarias/corona-funeral-colorida.png',
        description: 'Flores tropicales como heliconias y orquídeas.',
    },
    {
        id: 7,
        name: 'Corona Rosa',
        price: 48,
        image: '../assets/images/coronas-funerarias/corona-funeral-campo.jpg',
        description: 'Rosas rojas y blancas con hojas verdes.',
    },
    {
        id: 8,
        name: 'Corona de Rosas Blancas',
        price: 38,
        image: '../assets/images/coronas-funerarias/corona-rosas-blancas.jpg',
        description: 'Corona de rosas blancas y flores de temporada.',
    },
    {
        id: 9,
        name: 'Corona Noche Estrellada',
        price: 65,
        image: '../assets/images/coronas-funerarias/corona1.jpg',
        description: 'Corona de flores moradas y estrellas de jazmín.',
    },
    {
        id: 10,
        name: 'Corona de Amor Eterno',
        price: 70,
        image: '../assets/images/coronas-funerarias/corona2.jpg',
        description: 'Rosas rojas y nardos para un homenaje especial.',
    },
    {
        id: 11,
        name: 'Corona Refugio',
        price: 72,
        image: '../assets/images/coronas-funerarias/corona3.png',
        description: 'Combinación de rosas, lirios y orquídeas para un mensaje de paz.',
    },
    {
        id: 12,
        name: 'Corona de Cristal',
        price: 75,
        image: '../assets/images/coronas-funerarias/corona4.jpg',
        description: 'Corona con lirios y flores frescas de verano.',
    },
    {
        id: 13,
        name: 'Corona de Serenidad Blanca',
        price: 62,
        image: '../assets/images/coronas-funerarias/corona5.png',
        description: 'Corona en tonos blancos y lilas para transmitir paz.',
    },
    {
        id: 14,
        name: 'Corona de Luna',
        price: 58,
        image: '../assets/images/coronas-funerarias/corona6.jpg',
        description: 'Corona con flores blancas y azules como el cielo.',
    },
    {
        id: 15,
        name: 'Corona de Descanso',
        price: 52,
        image: '../assets/images/coronas-funerarias/corona7.jpg',
        description: 'Combinación de claveles, rosas blancas y margaritas.',
    },
    {
        id: 16,
        name: 'Corona Eterna',
        price: 80,
        image: '../assets/images/coronas-funerarias/corona8.jpg',
        description: 'Flores moradas y blancas para honrar el recuerdo.',
    },
    {
        id: 17,
        name: 'Corona Gardenia',
        price: 45,
        image: '../assets/images/coronas-funerarias/corona9.jpg',
        description: 'Corona con gardenias y hojas verdes.',
    },
    {
        id: 18,
        name: 'Corona de Ensueño',
        price: 68,
        image: '../assets/images/coronas-funerarias/corona10.jpg',
        description: 'Corona con flores silvestres y rosas en tonos pasteles.',
    },
    {
        id: 19,
        name: 'Corona Homenaje',
        price: 66,
        image: '../assets/images/coronas-funerarias/corona11.jpg',
        description: 'Combinación de rosas rojas, orquídeas y lirios.',
    },
    {
        id: 20,
        name: 'Corona Tranquilidad',
        price: 40,
        image: '../assets/images/coronas-funerarias/corona12.jpg',
        description: 'Corona de jazmín, rosas y claveles blancos.',
    },
    {
        id: 21,
        name: 'Corona Luz',
        price: 64,
        image: '../assets/images/coronas-funerarias/corona13.jpg',
        description: 'Rosas blancas y flores amarillas para un mensaje de esperanza.',
    },
    {
        id: 22,
        name: 'Corona de Resistencia',
        price: 53,
        image: '../assets/images/coronas-funerarias/corona14.jpg',
        description: 'Corona con rosas de colores cálidos y follaje verde.',
    },
];


  constructor() { }

  getProducts(): Funerales[] {
    return this.products;
  }

  addToCart(product: Funerales): void {
    const newProduct = { ...product, quantity: 1 };
    this.funeral.push(newProduct);
  }
  

  getCart(): Funerales[] {
      return this.funeral;
  }

  getTotal(): number {
    return this.funeral.reduce((sum, item) => sum + item.price, 0);
  }

  removeFromCart(product: Funerales): void {
    this.funeral = this.funeral.filter(item => item !== product);
  }

  clearCart(): void {
      this.funeral = [];
  }
}
