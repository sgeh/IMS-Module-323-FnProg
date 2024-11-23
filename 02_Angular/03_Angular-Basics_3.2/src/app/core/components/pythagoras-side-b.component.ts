import { Component, output } from '@angular/core';
import { HistoryEntry, HistoryItem } from '../history-entry';
import { calculateB, calculateBeta } from '../../math';

@Component({
  selector: 'app-pythagoras-side-b',
  standalone: true,
  imports: [],
  template: `
<form>
    <fieldset>
        <legend>Calculate b</legend>
        <div>
            <label>
                a:
                <input name="a-input" type="number" min="0" (change)="onValueAChange($event)" required>
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
                b =
                <input [value]="result" name="result" type="number" readonly disabled>
            </label>
        </div>
        <div>
            <label>
                β =
                <input [value]="beta" name="angle-result" type="number" readonly disabled>
            </label>
        </div>
    </fieldset>
</form>
  `,
  styles: ``
})
export class PyhtagorasSideBComponent {
  public result = 0;
  public beta = 0;
  private a = 0;
  private c = 0;

  public calculationClick = output<HistoryEntry>();

  onCalculate(e: Event) {
    this.result = calculateB(this.a, this.c);
    this.beta = calculateBeta(this.a, this.c);
    this.calculationClick.emit(new HistoryItem(this.a, this.result, this.c));
    e.preventDefault();
  }
  onValueAChange(e: Event) {
    this.a = (<HTMLInputElement>e.target).valueAsNumber;
  }
  onValueCChange(e: Event) {
    this.c = (<HTMLInputElement>e.target).valueAsNumber;
  }
}
