import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PeopleService } from '../../providers/people-service/people-service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[PeopleService]
})
export class HomePage {
  public people: any;
  constructor(public peopleService: PeopleService) {
    this.loadPeople();

  }
  loadPeople(){
    console.log("vao day roi nhe");
    //this.peopleService.load2();
   /* .then(data => {
      this.people = data;
    });*/
  }

}
