import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="note-list">
      <div class="note-card" *ngFor="let note of notes">
        <div class="note-code">{{ note.code }}</div>
        <div class="note-description">{{ note.description }}</div>
      </div>
    </div>
  `,
  styles: `
.note-list {
  display: flex;
  flex-wrap: wrap; /* Permette alle card di andare a capo quando non c'è abbastanza spazio */
  gap: 20px; /* Spazio tra le card */
  margin-top: 20px;
}

.note-card {
  flex: 1 1 calc(33% - 20px); /* Ogni card occupa circa un terzo della larghezza della riga, meno il gap */
  background-color: #ffffff; /* Colore di sfondo per le card */
  border: 1px solid #e0e0e0; /* Bordo grigio chiaro */
  border-radius: 8px; /* Angoli arrotondati */
  padding: 20px; /* Spazio interno */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Ombra leggera */
  box-sizing: border-box; /* Assicura che padding e border siano inclusi nella larghezza totale */
}

.note-code {
  font-weight: bold;
  color: #007aff; /* Colore per il codice della nota */
  margin-bottom: 10px; /* Spazio sotto il codice */
}

.note-description {
  color: #333; /* Colore del testo della descrizione */
}
  `,
})
export class AppNoteListComponent {
  notes = [
    { code: '001', description: 'Prima nota di esempio' },
    { code: '002', description: 'Seconda nota di esempio' },
    { code: '001', description: 'Prima nota di esempio' },
    { code: '002', description: 'Seconda nota di esempio' },
    { code: '001', description: 'Prima nota di esempio' },
    { code: '002', description: 'Seconda nota di esempio' },
  ];
}
