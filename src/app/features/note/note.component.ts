import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddButtonComponent } from '../../components/add-button.component';
import { AppNoteListComponent } from '../../components/note-list/note-list.component';

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
  styleUrls: ["./note.component.css"],
})
export class NoteComponent {}
