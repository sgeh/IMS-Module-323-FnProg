import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { calculateC } from './math';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public result = 0;
  private a = 0;
  private b = 0;

  onCalculate(e: Event) {
    this.result = calculateC(this.a)(this.b);
    e.preventDefault();
  }
  onValueAChange(e: Event) {
    this.a = (<HTMLInputElement>e.target).valueAsNumber;
  }
  onValueBChange(e: Event) {
    this.b = (<HTMLInputElement>e.target).valueAsNumber;
  }
}
