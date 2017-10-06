import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  copyright = {bussines: "Celiz Matias", year: 2017 };
  
  constructor() { }

  ngOnInit() {
  }

}
