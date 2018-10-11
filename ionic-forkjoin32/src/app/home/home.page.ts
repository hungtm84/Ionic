import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(public api: RestApiService, public loadingController: LoadingController) { }
  data1: any;
  data2: any;
  data3: any;
  data4: any;
  ngOnInit() { this.getData(); }
  async getData() {
  const loading = await this.loadingController.create({
    message: 'Hung: Loading'
  });
  await loading.present();
  this.api.getData()
    .subscribe(res => {
      console.log(res);
      this.data1 = res[0];
      this.data2 = res[1];
      this.data3 = res[2];
      this.data4 = res[3];
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
}

}
