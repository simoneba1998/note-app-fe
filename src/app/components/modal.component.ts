import { Component, Input } from '@angular/core';
import { Modal } from '../models/modal.interface';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  template: `
    <!-- DELETE MODAL-->
    <div
      class="modal fade"
      id="Delete"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Delete confirmation
            </h5>
            <button
              type="button"
              class="btn-close"
              aria-label="Close"
              (click)="closeModal()"
            ></button>
          </div>
          <div class="modal-body">
            Are you sure you want to delete the memo?
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
              (click)="onDeleteNote()"
            >
              Delete
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              (click)="closeModal()"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class ModalComponent {
  @Input() ModalData!: Modal;

  constructor(private noteService: NoteService) {}

  closeModal() {
    const modalElement = document.getElementById(this.ModalData!.type);
    if (modalElement) {
      const modal = (window as any).bootstrap.Modal.getInstance(modalElement);
      modal?.hide();
    }
  }

  onDeleteNote() {
    this.noteService.deleteNote(this.ModalData.value).subscribe({
      next: () => {
        this.noteService.refreshNotes();
        this.closeModal();
      },
      error: (err) => {
        console.error('Errore durante l\'eliminazione della nota:', err);
      }
    });
  }

}
