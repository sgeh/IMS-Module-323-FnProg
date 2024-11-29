import { Injectable } from '@angular/core';
import { HistoryEntry } from '../history-entry';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private readonly history: HistoryEntry[] = [ ];

  public getHistory() { return this.history; }
  public add(entry: HistoryEntry): void { 
    this.history.push(entry);
  } 
}
