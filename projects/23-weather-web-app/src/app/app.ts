import { Component, signal, inject, computed } from '@angular/core';
import { Input } from './components/ui/input/input';
import { Button } from './components/ui/button/button';
import { Weather } from './services/weather';
import { Card } from './components/card/card';

@Component({
  selector: 'app-root',
  imports: [Input, Button, Card],
  providers: [Weather],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  location = signal('');
  currentLocation = '';
  weather = inject(Weather);
  forecast = computed(() => this.weather.getForecast.value());

  ngOnInit() {
    this.fetchByGeolocation();
  }

  fetchForecast(location = this.location()) {
    this.weather.setLocation(location);
    this.currentLocation = location;
  }

  refreshForecast() {
    this.weather.setLocation(this.currentLocation);
  }

  private fetchByGeolocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = `${position.coords.latitude},${position.coords.longitude}`;
          this.fetchForecast(userLocation);
        },
        (error) => {
          console.error('Error code:', error.code, 'Message:', error.message);
        },
      );
    }
  }
}
