import { Injectable } from '@angular/core';
import { HistoryEntry } from '../history-entry';

export type HistoryEntryInStore = Readonly<HistoryEntry>;
export type HistoryArrayInStore = ReadonlyArray<HistoryEntryInStore>;

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private history: HistoryArrayInStore = [ ];

  public getHistory(cFilter?: number) {
    if (cFilter) {
      return this.history.filter(entry => {
        const delta = Math.abs(entry.c - cFilter); 
        return (delta <= 0.1);
      });
    }
    return this.history;
  }

  public add(entry: HistoryEntry): void { 
    this.history = [ ...this.history, entry ];
  }
}
