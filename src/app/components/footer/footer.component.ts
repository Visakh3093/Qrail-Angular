import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer, HeaderFooterModel } from '../../model/header-footer.interface';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  data:HeaderFooterModel = require('../../../assets/locales/header-footer.json')
  footerData:Footer[] = this.data.body.footer
  ngOnInit(): void {
           
      
  }

}
