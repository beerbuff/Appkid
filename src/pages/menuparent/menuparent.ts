import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActivityviewPage } from '../activityview/activityview';
import { QrCodePaPage } from '../qr-code-pa/qr-code-pa';
import { BmiviewPage } from '../bmiview/bmiview';

/**
 * Generated class for the MenuparentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menuparent',
  templateUrl: 'menuparent.html',

})
export class MenuparentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

activityView(){
  this.navCtrl.push(ActivityviewPage)
}

Qrview(){
  this.navCtrl.push(QrCodePaPage)
}

Bmiview(){
  this.navCtrl.push(BmiviewPage)

}
}//end class
