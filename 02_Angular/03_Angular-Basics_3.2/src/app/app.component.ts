import { Component } from '@angular/core';
import { PythagorasOverviewComponent } from "./core/components/pythagoras-overview.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PythagorasOverviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
