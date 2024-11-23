import { Component, output } from '@angular/core';
import { HistoryEntry, HistoryItem } from '../history-entry';
import { calculateA, calculateAlpha } from '../../math';

@Component({
  selector: 'app-pythagoras-side-a',
  standalone: true,
  imports: [],
  template: `
<form>
    <fieldset>
        <legend>Calculate a</legend>
        <div>
            <label>
                b:
                <input name="b-input" type="number" min="0" (change)="onValueBChange($event)" required>
            </label>
        </div>
        <div>
            <label>
                c:
                <input name="c-input" type="number" min="0" (change)="onValueCChange($event)" required>
            </label>
        </div>
        <div>
            <p><input type="submit" value="Berechnen" (click)="onCalculate($event)"></p>
        </div>
        <div>
            <label>
                a =
                <input [value]="result" name="result" type="number" readonly disabled>
            </label>
        </div>
        <div>
            <label>
                α =
                <input [value]="alpha" name="angle-result" type="number" readonly disabled>
            </label>
        </div>
    </fieldset>
</form>
  `,
  styles: ``
})
export class PyhtagorasSideAComponent {
  public result = 0;
  public alpha = 0;
  private b = 0;
  private c = 0;

  calculationClick = output<HistoryEntry>();

  onCalculate(e: Event) {
    this.result = calculateA(this.b, this.c);
    this.alpha = calculateAlpha(this.b, this.c);
    this.calculationClick.emit(new HistoryItem(this.result, this.b, this.c));
    e.preventDefault();
  }
  onValueBChange(e: Event) {
    this.b = (<HTMLInputElement>e.target).valueAsNumber;
  }
  onValueCChange(e: Event) {
    this.c = (<HTMLInputElement>e.target).valueAsNumber;
  }
}
