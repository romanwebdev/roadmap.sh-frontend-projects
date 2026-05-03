import { Injectable, resource, signal } from '@angular/core';

const apiKey = import.meta.env['NG_APP_API_KEY'];

@Injectable({
  providedIn: 'root',
})
export class Weather {
  location = signal('');

  private get24HourPeriods() {
    const now = new Date();

    const prev = new Date(now);
    prev.setHours(prev.getHours() - 24);

    const next = new Date(now);
    next.setHours(next.getHours() + 24);

    const format = (date: Date) => {
      const y = date.getFullYear();
      const m = String(date.getMonth() + 1).padStart(2, '0');
      const d = String(date.getDate()).padStart(2, '0');
      return `${y}-${m}-${d}`;
    };

    return {
      previous: format(prev),
      current: format(now),
      next: format(next),
    };
  }

  getForecast = resource({
    params: () => ({ location: this.location() }),
    loader: async ({ params }) => {
      const { previous, next } = this.get24HourPeriods();

      if (!params.location) return;

      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${params.location}/${previous}/${next}?key=${apiKey}
      `,
      );
      if (response.ok) {
        const data = await response.json();
        return data;
      }

      const message = await response.text();
      return { error: true, message };
    },
  });

  setLocation(location: string) {
    this.location.set(location);
  }
}
