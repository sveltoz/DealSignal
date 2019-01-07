import { Injectable } from '@angular/core';
import { Headers, Response, Http, RequestOptions } from '@angular/http';
import { NullAstVisitor } from '@angular/compiler';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

let apiDataUrl = 'http://demo8499921.mockable.io/angular';
let apiImageDataUrl = 'https://picsum.photos/list';

@Injectable()

export class ApiService {

  constructor(public http: Http) {
  }

  getData() {
    debugger;
    return new Promise((resolve, reject) => {
      this.http.get(apiDataUrl,{})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  getImageData() {
    debugger;
    return new Promise((resolve, reject) => {
      this.http.get(apiImageDataUrl,{})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

}
