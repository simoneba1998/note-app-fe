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
  styleUrls:["./note-list.component.css"],
})
export class AppNoteListComponent {
  notes = [
    { code: '001', description: 'Prima nota di esempio' },
    { code: '002', description: 'Seconda nota di esempio' },
    { code: '001', description: 'Prima nota di esempio' },
    { code: '002', description: 'Seconda nota di esempio' },
    { code: '001', description: 'Prima nota di esempio' },
    { code: '002', description: 'Seconda nota di esempio' },
    { code: '001', description: 'Prima nota di esempio' },
    { code: '002', description: 'Seconda nota di esempio' },
    { code: '001', description: 'Prima nota di esempio' },
    { code: '002', description: 'Seconda nota di esempio' },
    { code: '001', description: 'Prima nota di esempio' },
    { code: '002', description: 'Seconda nota di esempio' },
    { code: '001', description: 'Prima nota di esempio' },
    { code: '002', description: 'Seconda nota di esempio' },
    { code: '001', description: 'Prima nota di esempio' },
    { code: '002', description: 'Seconda nota di esempio' },
    { code: '001', description: 'Prima nota di esempio' },
    { code: '002', description: 'Seconda nota di esempio' },
  ];
}
