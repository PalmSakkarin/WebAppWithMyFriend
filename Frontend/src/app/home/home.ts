import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private router: Router) {}

  navigateToPalmPage(): void {
    this.router.navigate(['/palm-page']);
  }

  navigateToPluemPage(): void {
    this.router.navigate(['/pluem-page']);
  }

  navigateToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}
