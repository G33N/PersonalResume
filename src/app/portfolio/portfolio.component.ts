import { Component, OnInit } from '@angular/core';
// ngx-translate
import { TranslateService } from '@ngx-translate/core';
// Firebase
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  items: any;

  constructor(public translate: TranslateService, private db: AngularFireDatabase) {
    translate.addLangs(["en", "es"]);
        translate.setDefaultLang('en');
        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es/) ? browserLang : 'en');

  }

  ngOnInit() {
    this.getPortfolio();
  }

  getPortfolio(){
    this.db.list('portfolio_list').valueChanges().subscribe(snapshot => {
      this.items = snapshot;
    });
  }
}
