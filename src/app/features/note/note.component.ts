import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AddButtonComponent } from '../../components/add-button.component';
import { ModalComponent } from '../../components/modal.component';
import { AppNoteListComponent } from '../../components/note-list/note-list.component';
import { ModalType } from '../../constants';
import { Modal } from '../../models/modal.interface';
import { Note } from '../../models/note.interface';
import { ModalService } from '../../services/modal.service';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule, AddButtonComponent, AppNoteListComponent, ModalComponent],
  template: `
    <div class="app-header">
      <app-add-button (click)="openModalAddNote()"></app-add-button>
      <h1 class="title">MemoWiz</h1>
    </div>
    <div class="app-container">
      <app-note-list [notes]="noteList!"></app-note-list>
      <app-modal [ModalData]="modalData!"></app-modal>
    </div>
  `,
  styleUrls: ['./note.component.css'],
})
export class NoteComponent implements OnInit {
  noteList?: Note[];
  modalData:Modal={
    type:ModalType.ADD_NOTE,
    value:{}
  }

  constructor(private noteService: NoteService, private modalService:ModalService) {
    this.noteService.notes$.subscribe((res) => (this.noteList = res));
  }

  ngOnInit(): void {
    this.noteService.refreshNotes();
  }

  openModalAddNote() {
    this.modalService.openModal(this.modalData.type);
  }
}
