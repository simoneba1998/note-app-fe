import { Component } from '@angular/core';

@Component({
  selector: 'app-add-button',
  standalone: true,
  imports: [],
  template: `
  <button class="add-button">+</button>
  `,
  styles: `
.add-button {
  font-size: 24px !important; /* Dimensione del testo del pulsante */
  background-color: #4d5878; /* Colore di sfondo del pulsante */
  color: white; /* Colore del testo del pulsante */
  border: none;
  border-radius: 50%; /* Pulsante rotondo */
  width: 40px; /* Larghezza del pulsante */
  height: 40px; /* Altezza del pulsante */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer; /* Cambia il cursore quando passa sopra il pulsante */
  font-family: initial !important;
}
  `
})
export class AddButtonComponent {

}
