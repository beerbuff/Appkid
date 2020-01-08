import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the QrCodePaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qr-code-pa',
  templateUrl: 'qr-code-pa.html',
})
export class QrCodePaPage {
  QrImageArray = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
    this.loadqrimageData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrCodePaPage');
  }
  loadqrimageData(){
    let url = "http://localhost/servicephp/getparent.php";
    this.http.get(url).subscribe((data: any) => {
      this.QrImageArray = data.parent;
      console.log(this.QrImageArray);
    }, (error) => { console.log(error) });

  }


}//end class
