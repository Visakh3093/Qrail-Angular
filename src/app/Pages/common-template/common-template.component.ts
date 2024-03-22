import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-common-template',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './common-template.component.html',
  styleUrl: './common-template.component.css'
})
export class CommonTemplateComponent {

}
