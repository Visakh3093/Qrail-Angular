import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-manage-cards',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './manage-cards.component.html',
  styleUrl: './manage-cards.component.css',
  host: {
    '[attr.ngSkipHydration]': 'true'
  }
})
export class ManageCardsComponent {

}
