import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';

import { promise } from 'selenium-webdriver';

// SET YOU OWN CONFIG here
const CONFIG = {
  space: '3w8rsubga3a4',
  accessToken: 'f5f9fb38432bf701787e1d08a875a3172f6735afaa100b1cafab24891319a502',

  contentTypeIds: {
    experience: 'experience',
    education: 'education',
    portfolio: 'portfolio',
    skills: 'skills'
  }
};

@Injectable()
export class ContentfulService {

  private client = contentful.createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });

  image: any;

  constructor() { }

  // Get all experiences
  getExperiences(query?: object): Promise<contentful.Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.experience
    }, query))
      .then(res => res.items);
  }
  // Get educacion
  getEducacion(query?: object): Promise<contentful.Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.education
    }, query))
      .then(res => res.items);
  }
  // Get portfolio
  getPortfolio(query?: object): Promise<contentful.Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.portfolio
    }, query))
      .then(res => res.items);
  }
  // Get skills
  getSkills(query?: object): Promise<contentful.Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.skills
    }, query))
      .then(res => res.items);
  }
}
