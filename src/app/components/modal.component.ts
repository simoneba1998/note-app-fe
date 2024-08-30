import { Component, Input, OnInit } from '@angular/core';
import { Modal } from '../models/modal.interface';
import { NoteService } from '../services/note.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
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
              (click)="closeModal('Delete')"
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
              (click)="closeModal('Delete')"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- ADD MODAL-->
    <div
      class="modal fade"
      id="Add"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Memo</h5>
            <button
              type="button"
              class="btn-close"
              aria-label="Close"
              (click)="closeModal('Add')"
            ></button>
          </div>
          <div class="modal-body">
            <form [formGroup]="noteAddForm!">
              <div class="form-group mb-2">
                <label for="code">Code</label>
                <input
                  type="text"
                  class="form-control"
                  id="code"
                  placeholder="Enter Code"
                  formControlName="code"
                  [ngClass]="{'is-invalid': noteAddForm!.get('code')!.invalid && noteAddForm!.get('code')!.touched}"
                />
                <div *ngIf="noteAddForm!.get('code')!.invalid && noteAddForm!.get('code')!.touched" class="text-danger">
                 <small *ngIf="noteAddForm!.get('code')!.errors?.['required']">Code is required.</small>
                </div>
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <textarea
                  class="form-control"
                  id="description"
                  rows="3"
                  formControlName="description"
                  placeholder="Enter Description"
                ></textarea>
                <div *ngIf="noteAddForm!.get('description')!.invalid && noteAddForm!.get('description')!.touched" class="text-danger">
                 <small *ngIf="noteAddForm!.get('description')!.errors?.['required']">Description is required.</small>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" (click)="onAddNote()" [disabled]="noteAddForm!.get('description')!.invalid">
              Add
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              (click)="closeModal('Add')"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- UPDATE MODAL -->
  `,
  styles: ``,
})
export class ModalComponent implements OnInit {
  @Input() ModalData!: Modal;
  noteAddForm?: FormGroup;

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.noteAddForm = new FormGroup({
      code: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
    });
  }

  closeModal(type: string) {
    const modalElement = document.getElementById(type);
    if (modalElement) {
      const modal = (window as any).bootstrap.Modal.getInstance(modalElement);
      modal?.hide();
    }
    this.noteAddForm?.reset();
  }

  onDeleteNote() {
    this.noteService.deleteNote(this.ModalData.value).subscribe({
      next: () => {
        this.noteService.refreshNotes();
        this.closeModal('Delete');
      },
      error: (err) => {
        console.error("Errore durante l'eliminazione della nota:", err);
      },
    });
  }

  onAddNote() {
    let Note={
      code: this.noteAddForm?.get('code')?.value,
      description:this.noteAddForm?.get('description')?.value
    }

    this.noteService.addNote(Note).subscribe({
      next: () => {
        this.noteService.refreshNotes();
        this.closeModal('Add');
        this.noteAddForm?.reset();
      },
      error: (err) => {
        console.error("Errore durante l'aggiunta della nota:", err);
      },
    });
  }
}
