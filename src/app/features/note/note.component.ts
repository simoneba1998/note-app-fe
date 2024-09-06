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
import { SearchButtonComponent } from '../../components/search-button.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DigitalClockComponent } from '../../components/digital-clock.component';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [
    CommonModule,
    AddButtonComponent,
    AppNoteListComponent,
    ModalComponent,
    SearchButtonComponent,
    ReactiveFormsModule,
    DigitalClockComponent
  ],
  template: `
    <div class="app-header">
      <div class="button-container">
        <app-add-button (click)="openModalAddNote()"></app-add-button>
        <!-- <app-search-button (click)="toggleInput()"></app-search-button> -->
        <div class="input-container" [ngClass]="{ 'slide-out': !showInput }">
          <div class="input-group">
            <input
              type="text"
              class="form-control custom-input"
              placeholder="Search Memo By Code"
              aria-label="search"
              [formControl]="searchControl"
            />
            <span class="input-group-text custom-input" *ngIf="searchControl.value">
              <i class="bi bi-x-circle" (click)="cleanSearch()"></i>
            </span>
            <span class="input-group-text custom-input" *ngIf="!searchControl.value">
              <i class="bi bi-search"></i>
            </span>
          </div>
        </div>
      </div>
      <app-digital-clock></app-digital-clock>
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
  showInput = false;
  modalData: Modal = {
    type: ModalType.ADD_NOTE,
    value: {},
  };
  searchControl = new FormControl('');

  constructor(
    private noteService: NoteService,
    private modalService: ModalService
  ) {
    this.noteService.notes$.subscribe((res) => (this.noteList = res));
  }

  ngOnInit(): void {
    this.noteService.refreshNotes();

    this.searchControl.valueChanges.subscribe((value) => {

        this.noteService.refreshNotes(value as string);

    });
  }

  openModalAddNote() {
    this.modalService.openModal(this.modalData.type);
  }

  // toggleInput() {
  //   this.searchControl.reset();
  //   if (this.showInput) {
  //     this.noteService.refreshNotes();
  //   }
  //   this.showInput = !this.showInput;
  // }

  cleanSearch(){
    this.searchControl.reset();
  }
}
