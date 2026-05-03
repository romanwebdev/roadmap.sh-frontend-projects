import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  data = input<any>(null);

  fahrenheitToCelsius(f: number) {
    return Math.round(((f - 32) * 5) / 9);
  }
}
