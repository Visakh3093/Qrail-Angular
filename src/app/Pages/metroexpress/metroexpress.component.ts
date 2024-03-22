import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-metroexpress',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './metroexpress.component.html',
  styleUrl: './metroexpress.component.css',
  host: {
    '[attr.ngSkipHydration]': 'true'
  }
})
export class MetroexpressComponent {

}
