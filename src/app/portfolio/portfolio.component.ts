import { log } from 'util';
import { Component, OnInit } from '@angular/core';
// ngx-translate
import { TranslateService } from '@ngx-translate/core';
// Firebase
import { AngularFireDatabase } from 'angularfire2/database';
import { ContentfulService } from '../services/contentful.service';
import { Entry } from 'contentful';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolio: any;
  constructor(public translate: TranslateService, private db: AngularFireDatabase, private contentfulService: ContentfulService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }

  ngOnInit() {
    this.getPortfolio();
  }

  getPortfolio() {
    this.contentfulService.getPortfolio()
      .then(portfolio => {
        this.portfolio = portfolio;
        console.log(portfolio);
      });
  }
}
