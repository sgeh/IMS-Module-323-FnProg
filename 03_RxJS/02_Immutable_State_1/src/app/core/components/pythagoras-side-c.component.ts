import { Component, output } from '@angular/core';
import { calculateC } from '../../math';
import { HistoryEntry, HistoryItem } from '../history-entry';

@Component({
  selector: 'app-pythagoras-side-c',
  standalone: true,
  imports: [],
  template: `
<form>
    <fieldset>
      <legend>Calculate c</legend>
      <div>
        <label>
          a:
          <input name="a-input" type="number" min="0" (change)="onValueAChange($event)" required>
        </label>
      </div>
      <div>
        <label>
          b:
          <input name="b-input" type="number" min="0" (change)="onValueBChange($event)" required>
        </label>
      </div>
      <div>
        <p><input type="submit" value="Berechnen" (click)="onCalculate($event)"></p>
      </div>
      <div>
        <label>
          c =
          <input [value]="result" type="number" readonly disabled>
        </label>
      </div>
    </fieldset>
  </form>
  `,
  styles: ``
})
export class PythagorasSideCComponent {
  public result = 0;
  private a = 0;
  private b = 0;

  calculationClick = output<HistoryEntry>();

  onCalculate(e: Event) {
    this.result = calculateC(this.a)(this.b);
    this.calculationClick.emit(new HistoryItem(this.a, this.b, this.result));
    e.preventDefault();
  }
  onValueAChange(e: Event) {
    this.a = (<HTMLInputElement>e.target).valueAsNumber;
  }
  onValueBChange(e: Event) {
    this.b = (<HTMLInputElement>e.target).valueAsNumber;
  }
}
