import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: any;
  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.getSkills();
  }

  getSkills() {
    this.contentfulService.getSkills()
      .then(skills => {
        this.skills = skills;
      });
  }

}
