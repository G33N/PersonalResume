import { Component, OnInit } from '@angular/core';
// ngx-translate
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(public translate: TranslateService) {
    translate.addLangs(["en", "es"]);
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }

  ngOnInit() {
  }

}
