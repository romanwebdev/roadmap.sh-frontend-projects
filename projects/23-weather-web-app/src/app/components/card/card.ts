import { Component, input } from '@angular/core';
import { IDay } from '../../types';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  data = input<IDay | null>(null);

  fahrenheitToCelsius(f: number | undefined) {
    if (!f) return 'N/A';
    return Math.round(((f - 32) * 5) / 9);
  }
}
