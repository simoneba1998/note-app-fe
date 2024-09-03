import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Note } from '../models/note.interface';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  http = inject(HttpClient);
  noteSubject = new Subject<Note[]>();
  notes$ = this.noteSubject.asObservable();

  constructor() {}

  refreshNotes(){
    this.getNotes().subscribe(
      res => this.noteSubject.next(res)
    );
  }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>('http://localhost:8080/esis/to-do-list');
  }

  deleteNote(id:number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/esis/to-do-list/${id}`);
  }

  addNote(note:Note){
    return this.http.post<Note>('http://localhost:8080/esis/to-do-list',note);
  }

  getNoteById(id:number): Observable<Note> {
    return this.http.get<Note>(`http://localhost:8080/esis/to-do-list/${id}`);
  }

  updateNote(note:Note): Observable<void> {
    return this.http.put<void>(`http://localhost:8080/esis/to-do-list/${note.id}`,note);
  }
}
