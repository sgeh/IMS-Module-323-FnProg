import { Injectable } from '@angular/core';
import { HistoryEntry } from '../history-entry';

// erstellt den Typ-Alias 'HistoryEntryInStore' für Readonly<HistoryEntry>
export type HistoryEntryInStore = Readonly<HistoryEntry>;

// erstellt den Typ-Alias 'HistoryArrayInStore' für ReadonlyArray<HistoryEntryInStore>
export type HistoryArrayInStore = ReadonlyArray<HistoryEntryInStore>;

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private history: HistoryArrayInStore = [ ];

  public getHistory() { return this.history; }
  public add(entry: HistoryEntry): void { 
    this.history = [ ...this.history, entry ];
  } 
}
