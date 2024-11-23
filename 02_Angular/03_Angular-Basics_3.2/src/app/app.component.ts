import { Component } from '@angular/core';
import { PyhtagorasOverviewComponent } from "./core/components/pythagoras-overview.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PyhtagorasOverviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
