import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  standalone: true,
  imports: [CommonModule],
  template: `
<div class="digital-clock">
  {{ currentTime }}
</div>
  `,
  styles: `

.digital-clock {
  font-size: 28px;
  font-weight:bold;
  color: black;
  border-radius: 5px;
  display: inline-block;
  text-align: center;
}
  `
})
export class DigitalClockComponent implements OnInit, OnDestroy {
  currentTime: string = '';  // Variabile per memorizzare l'ora corrente
  private timer: any;  // Timer per aggiornare l'ora ogni secondo

  ngOnInit() {
    this.updateTime();  // Mostra subito l'ora
    this.timer = setInterval(() => this.updateTime(), 1000);  // Aggiorna ogni secondo
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);  // Ferma il timer quando il componente viene distrutto
    }
  }

  updateTime() {
    const now = new Date();  // Ottieni l'ora attuale
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    this.currentTime = `${hours}:${minutes}:${seconds}`;  // Imposta l'ora formattata
  }
}
