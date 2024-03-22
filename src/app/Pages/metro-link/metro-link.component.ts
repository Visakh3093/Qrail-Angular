import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-metro-link',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './metro-link.component.html',
  styleUrl: './metro-link.component.css',
  host: {
    '[attr.ngSkipHydration]': 'true'
  }
})
export class MetroLinkComponent {

}
