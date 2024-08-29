import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AddButtonComponent } from '../../components/add-button.component';
import { AppNoteListComponent } from '../../components/note-list/note-list.component';
import { NoteService } from '../../services/note.service';
import { Note } from '../../models/note.interface';

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
      <app-note-list [notes]="noteList!"></app-note-list>
    </div>
  `,
  styleUrls: ['./note.component.css'],
})
export class NoteComponent implements OnInit {
  noteList?: Note[];

  constructor(private noteService: NoteService) {
    this.noteService.notes$.subscribe((res) => (this.noteList = res));
  }

  ngOnInit(): void {
    this.noteService.refreshNotes();
  }
}
