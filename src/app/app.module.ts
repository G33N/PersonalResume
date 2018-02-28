import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// bootstrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// ngx-translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// http Module
import {HttpClient, HttpClientModule} from '@angular/common/http';
// FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CONFIG } from './app.firebase.config';

import { CardComponent } from './card/card.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';

// Services
import { ContentfulService } from './services/contentful.service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ExperienceComponent,
    EducationComponent,
    PortfolioComponent,
    FooterComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        }),
        // Import AngularFireModule to use firebase API
        AngularFireModule.initializeApp(FIREBASE_CONFIG),
        // Import AngularFireAuthModule to use Authenticacion API
        // AngularFireAuthModule,
        // Import AngularFireAuthModule to use database interactions
        AngularFireDatabaseModule,
  ],
  providers: [
    ContentfulService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
