import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private sessionOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  setSession(status: boolean): void {
    this.sessionOn.next(status);
  }

  getSession(): boolean {
    return this.sessionOn.getValue();
  }

  onSessionChange() {
    return this.sessionOn.asObservable();
  }

  logout(): void {
    this.setSession(false);
  }
}
