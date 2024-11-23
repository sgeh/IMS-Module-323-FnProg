import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  text = signal('Hallo Welt!');
  placeHolderText = 'Enter your Name...';
  numberInput = 0;
  onClick() { console.log(`log: ${this.numberInput}`); }
  onDataEntered(e: Event) {
    this.numberInput = (<HTMLInputElement>e.target).valueAsNumber;
    this.text.set(`${this.numberInput}`);
  }

  title = 'my-project';
}
