import { Component, input } from '@angular/core';

@Component({
  selector: 'app-pluem-page',
  standalone: false,
  templateUrl: './pluem-page.html',
  styleUrl: './pluem-page.css',
})
export class PluemPage {
    title = input<string>()
    id = input<number>()
    name = input<string>()
    description = input<string>()
}
