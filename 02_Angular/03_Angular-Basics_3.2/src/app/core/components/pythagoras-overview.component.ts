import { Component } from '@angular/core';
import { PythagorasSideCComponent } from "./pythagoras-side-c.component";
import { PythagorasSideAComponent } from "./pythagoras-side-a.component";
import { PythagorasSideBComponent } from "./pythagoras-side-b.component";
import { HistoryEntry } from '../history-entry';

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
<input type="button" (click)="onShowHistoryClick()" value="Show History">
  `,
  styles: ``
})
export class PythagorasOverviewComponent {
  private readonly calcHistory: HistoryEntry[] = [ ]; 

  onHistoryAdd(entry: HistoryEntry) {
    this.calcHistory.push(entry);
  }

  onShowHistoryClick() {
      let output = '-- History --\n\n';
  
      for (let history of this.calcHistory) {
          output += `a=${history.a}, b=${history.b}, c=${history.c}\n`;
      }
      alert(output);
  }
}
