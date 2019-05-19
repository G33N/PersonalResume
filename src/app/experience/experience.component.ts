import { log } from 'util';
import { Component, OnInit } from '@angular/core';
// ngx-translate
import { TranslateService } from '@ngx-translate/core';
// Firebase
import { AngularFireDatabase } from 'angularfire2/database';
import { ContentfulService } from '../services/contentful.service';
import { Entry } from 'contentful';
import { DatePipe } from '@angular/common';
import { OrderPipe } from 'ngx-order-pipe';



@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

private experiences: Entry<any>[] = [];

  constructor(public translate: TranslateService, private db: AngularFireDatabase, private contentfulService: ContentfulService, private orderPipe: OrderPipe ) {
    translate.addLangs(['en', 'es']);
        translate.setDefaultLang('en');

        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }

  ngOnInit() {
    this.getExperience();
  }

  getExperience() {
    this.contentfulService.getExperiences()
      .then(experiences => this.experiences = experiences);
  }
}
