import { Component, inject } from '@angular/core';
import { PythagorasSideCComponent } from "./pythagoras-side-c.component";
import { PythagorasSideAComponent } from "./pythagoras-side-a.component";
import { PythagorasSideBComponent } from "./pythagoras-side-b.component";
import { HistoryEntry } from '../history-entry';
import { HistoryService } from '../services/history.service';

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
<ol><!-- b) -->
  @for (history of historyService.getHistory(); track history) {
    <li>a={{ history.a }}, b={{ history.b }}, c={{ history.c }}</li>
  }
</ol>
  `,
  styles: ``
})
export class PythagorasOverviewComponent {
  historyService = inject(HistoryService);

  onHistoryAdd(entry: HistoryEntry) {
    this.historyService.add(entry);
  }

  /* a)
  onShowHistoryClick() {
      let output = '-- History --\n\n';
  
      for (let history of this.historyService.getHistory()) {
          output += `a=${history.a}, b=${history.b}, c=${history.c}\n`;
      }
      alert(output);
  }
  */
}
