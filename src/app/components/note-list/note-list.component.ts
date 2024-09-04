import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ModalType } from '../../constants';
import { Modal } from '../../models/modal.interface';
import { Note } from '../../models/note.interface';
import { ModalService } from '../../services/modal.service';
import { ModalComponent } from '../modal.component';

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
        <div class="note-update" *ngIf="note.updateDate">Last Update: {{formatISODateToDDMMYYYY(note.updateDate)}}</div>
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

  formatISODateToDDMMYYYY(isoDateString: string): string {
    // Crea un oggetto Date da una stringa ISO 8601
    const date = new Date(isoDateString);

    // Ottieni il giorno, mese e anno dalla data
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // I mesi sono indicizzati da 0
    const year = date.getUTCFullYear();

    // Restituisci la data formattata
    return `${day}/${month}/${year}`;
  }
}
