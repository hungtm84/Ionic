import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
/*
  Generated class for the PeopleServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PeopleService {
  public data: any;
  results;
 
  constructor(public http: HttpClient) {
    console.log('Hello PeopleServiceProvider Provider');
    this.data = null;
  }
  load2() {
    console.log("HungTM");
    return;
   
}
/*  
load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }
  
    // don't have the data yet
    return new Promise(resolve => {
    
      this.http.get('https://randomuser.me/api/?results=10')
        //.map(res => res.json())
        //.map(res => res.toString())
        .subscribe(data => {
          this.data = data;
          console.log(this.data);
          resolve(this.data);
        });
    });
  }
  */
  
}
