import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the BmiviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bmiview',
  templateUrl: 'bmiview.html',
})
export class BmiviewPage {
  bmiArray = [];


  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
    this.loadbmiData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BmiviewPage');
  }
  loadbmiData(){
    let url = "http://localhost/servicephp/getbmi.php/";
    this.http.get(url).subscribe((data: any) => {
      this.bmiArray = data.bmi;
      console.log(this.bmiArray);
    }, (error) => { console.log(error) });

  }

  viewDetail(item: any){
    this.navCtrl.push("SickStdForTeacherPage",item);
  
  }
}
