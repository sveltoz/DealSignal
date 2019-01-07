import { Component } from '@angular/core';
import { ApiService } from './api-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstImageData: any = [];
  fifthTitle: any;
  fourthTitle: any;
  thirdTitle: any;
  secondTitle: any;
  firstTitle: any;
  titles: any;
  url: any = [];
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
      for(var i=0; i<5; i++){
        this.firstImageData[i] = result[i];
        this.url[i] = 'https://picsum.photos/'+this.firstImageData[i].width+'/'+this.firstImageData[i].height+'?image='+this.firstImageData[i].id;
      }
     
    }, (err) => {
    });
  }
}


