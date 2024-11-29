import { Component, inject, signal } from '@angular/core';
import { PythagorasSideCComponent } from "./pythagoras-side-c.component";
import { PythagorasSideAComponent } from "./pythagoras-side-a.component";
import { PythagorasSideBComponent } from "./pythagoras-side-b.component";
import { HistoryEntry } from '../history-entry';
import { HistoryArrayInStore, HistoryService } from '../services/history.service';

@Component({
  selector: 'app-pythagoras-overview',
  standalone: true,
  imports: [PythagorasSideCComponent, PythagorasSideAComponent, PythagorasSideBComponent],
  template: `
<app-pythagoras-side-c (calculationClick)="onHistoryAdd($event)"></app-pythagoras-side-c>
<hr>
<app-pythagoras-side-a (calculationClick)="onHistoryAdd($event)"></app-pythagoras-side-a>
<hr>
<app-pythagoras-side-b (calculationClick)="onHistoryAdd($event)"></app-pythagoras-side-b>
<hr>
<h2>History</h2>
Filter: <input type="number" min="0" (change)="onFilterChange($event)" required>
<ol><!-- b) -->
  @for (history of historyData(); track history) {
    <li>a={{ history.a }}, b={{ history.b }}, c={{ history.c }}</li>
  }
</ol>
  `,
  styles: ``
})
export class PythagorasOverviewComponent {
  historyService = inject(HistoryService);
  historyData = signal<HistoryArrayInStore>([]);
  
  filter?: number;
  
  ngOnInit() {
    this.getData();
  }

  onHistoryAdd(entry: HistoryEntry) {
    this.historyService.add(entry);
    this.getData();
  }
  
  onFilterChange(event: Event) {
    this.filter = (<HTMLInputElement>event.target).valueAsNumber;
    this.getData();
  }

  getData() {
    this.historyService.getHistory(this.filter).subscribe(history => this.historyData.set(history));
  }
}

