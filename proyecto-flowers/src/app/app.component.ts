import { Component, OnInit } from '@angular/core';
import { FloresService } from './services/flores/flores.service';
import { RamosService } from './services/ramos/ramos.service';
import { FuneralesService } from './services/funerales/funerales.service';
import { BodasService } from './services/bodas/bodas.service';
import { SessionService } from './services/session/session.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'proyecto-flowers';
  private sessionSubscription: Subscription | null = null;

  constructor(
    private floresService: FloresService,
    private ramosService: RamosService,
    private funeralService: FuneralesService,
    private bodasService: BodasService,
    private sessionService: SessionService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.checkSession();
    this.sessionSubscription = this.sessionService.onSessionChange().subscribe(isSessionActive => {
      if (!isSessionActive) {
        this.router.navigate(['/login']);
      }
    });
  }

  get isSessionActive(): boolean {
    return this.sessionService.getSession();
  }

  getCartItemCount(): number {
    const cartCount = this.floresService.getCart().length;
    const ramosCount = this.ramosService.getCart().length;
    const funeralesCount = this.funeralService.getCart().length;
    const bodasCount = this.bodasService.getCart().length;

    return cartCount + ramosCount + funeralesCount + bodasCount;
  }

  logout(): void {
    this.sessionService.logout();
    this.router.navigate(['/login']);
  }

  private checkSession(): void {
    if (!this.sessionService.getSession()) {
      this.router.navigate(['/login']);
    }
  }

  ngOnDestroy(): void {
    if (this.sessionSubscription) {
      this.sessionSubscription.unsubscribe();
    }
  }
}
