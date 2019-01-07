import { Component } from '@angular/core';
import { ApiService } from './api-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fifthTitle: any;
  fourthTitle: any;
  thirdTitle: any;
  secondTitle: any;
  firstTitle: any;
  titles: any;
  url: string;
  title = 'app';

  constructor(public apiservice: ApiService) {
    debugger
    this.getData();
    this.getImageData();
  }
  
  getData(){
    debugger
    this.apiservice.getData().then((result) => {
      debugger;
      this.titles = result['titles']
      this.firstTitle = this.titles[0];
      this.secondTitle = this.titles[1];
      this.thirdTitle = this.titles[2];
      this.fourthTitle = this.titles[3];
      this.fifthTitle = this.titles[4];
    }, (err) => {
    });
  }

  getImageData(){
    debugger
    this.apiservice.getImageData().then((result) => {
      debugger;
      this.url = result[0].post_url;

    }, (err) => {
    });
  }
}


