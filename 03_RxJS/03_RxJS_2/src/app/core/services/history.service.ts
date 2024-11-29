import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { HistoryEntry } from '../history-entry';

export type HistoryEntryInStore = Readonly<HistoryEntry>;
export type HistoryArrayInStore = ReadonlyArray<HistoryEntryInStore>;

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private history: HistoryArrayInStore = [ ];

  public getHistory(cFilter?: number) : Observable<HistoryArrayInStore> {
    return of(this.history).pipe(
      map(data => {
        if (cFilter) {
          return data.filter(entry => {
            const delta = Math.abs(entry.c - cFilter); 
            return (delta <= 0.1);
          });
        }
        return this.history;
      })
    );
  }

  public add(entry: HistoryEntry): Observable<unknown> { 
    this.history = [ ...this.history, entry ];
    return of();
  }
}
