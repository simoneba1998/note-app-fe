import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddButtonComponent } from '../components/add-button.component';
import { AppNoteListComponent } from '../components/app-note-list.component';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule, AddButtonComponent, AppNoteListComponent],
  template: `
    <div class="app-header">
      <app-add-button></app-add-button>
      <h1 class="title">MemoWiz</h1>
    </div>
    <div class="app-container">
      <app-note-list></app-note-list>
    </div>
  `,
  styles: `
    /* Stili per l'intestazione */
    .app-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
    }

    /* Stili per il contenitore principale */
    .app-container {
      justify-content: space-evenly;
      padding: 10px; /* Spazio interno */
      height: calc(100vh - 100px); /* Altezza che tiene conto dell'intestazione */
      background-color: #ffffff; /* Colore di sfondo per il contenuto */
    }

    /* Stili per il titolo */
    .title {
      margin: 0;
      font-size: 24px; /* Dimensione del font per il titolo */
      font-weight: 600; /* Peso del font per enfatizzare il titolo */
    }
  `,
})
export class NoteComponent {}
