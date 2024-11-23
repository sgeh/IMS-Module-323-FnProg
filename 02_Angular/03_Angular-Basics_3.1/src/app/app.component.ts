import { Component } from '@angular/core';
import { PythagorasSideCComponent } from './core/components/pythagoras-side-c.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PythagorasSideCComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
