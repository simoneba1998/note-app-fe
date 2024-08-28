import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Note } from '../models/note.interface';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  http = inject(HttpClient);

  constructor() {}

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>('http://localhost:8080/esis/to-do-list');
  }
}
