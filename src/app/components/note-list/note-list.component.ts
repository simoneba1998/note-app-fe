import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Note } from '../../models/note.interface';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="note-list">
      <div class="note-card" *ngFor="let note of notes">
        <div class="note-code">{{ note.code }}
        </div>
        <div class="note-description truncate">{{ note.description }}</div>
      </div>
    </div>
  `,
  styleUrls: ['./note-list.component.css'],
})
export class AppNoteListComponent {
 @Input() notes?: Note[];

}
