import { Component } from '@angular/core';
import { PythagorasSideCComponent } from "./pythagoras-side-c.component";
import { PyhtagorasSideAComponent } from "./pythagoras-side-a.component";
import { PyhtagorasSideBComponent } from "./pythagoras-side-b.component";
import { HistoryEntry } from '../history-entry';

@Component({
  selector: 'app-pythagoras-overview',
  standalone: true,
  imports: [PythagorasSideCComponent, PyhtagorasSideAComponent, PyhtagorasSideBComponent],
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
export class PyhtagorasOverviewComponent {
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
