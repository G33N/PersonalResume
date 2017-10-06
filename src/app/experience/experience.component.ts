import { Component, OnInit } from '@angular/core';
// ngx-translate
import { TranslateService } from '@ngx-translate/core';
// Firebase
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
items: any;

  constructor(public translate: TranslateService, private db: AngularFireDatabase) {
    translate.addLangs(["en", "es"]);
        translate.setDefaultLang('en');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }

  ngOnInit() {
    this.getExperience();
  }

  getExperience(){
    this.db.list('experience_list').valueChanges().subscribe(snapshot => {
      this.items = snapshot;
    });
  }
}
