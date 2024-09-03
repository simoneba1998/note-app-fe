import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Note } from '../../models/note.interface';
import { ModalComponent } from '../modal.component';
import { ModalService } from '../../services/modal.service';
import { Modal } from '../../models/modal.interface';
import { ModalType } from '../../constants';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  template: `
    <div class="note-list">
      <div class="note-card" *ngFor="let note of notes">
        <div class="note-header">
          <div class="note-code">
            <div>
              {{ note.code }}
            </div>
            <div class="icon-container">
              <i class="bi bi-pencil" (click)="editNote(note?.id)"></i>
              <i class="bi bi-trash" (click)="openModalDeleteNote(note?.id)"></i>
            </div>
          </div>
        </div>
        <div class="note-description truncate">{{ note.description }}</div>
      </div>
    </div>

    <app-modal [ModalData]="modalData!"></app-modal>
  `,
  styleUrls: ['./note-list.component.css'],
})
export class AppNoteListComponent {
  @Input() notes?: Note[];

  modalData?: Modal;

  constructor(private modalService: ModalService) {}

  openModalDeleteNote(idNote?: number) {
    this.modalData = {
      type: ModalType.DELETE_NOTE,
      value: idNote,
    };
    this.modalService.openModal(this.modalData.type);
  }

  editNote(idNote?: number) {
    this.modalData = {
      type: ModalType.UPDATE_NOTE,
      value: idNote,
    };
    this.modalService.openModal(this.modalData.type);
  }
}
