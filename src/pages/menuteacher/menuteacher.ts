import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QrScanPage } from '../qr-scan/qr-scan';
import { SaveSickPage } from '../save-sick/save-sick';
import { StudentviewPage } from '../studentview/studentview';
import { CheckstudyPage } from '../checkstudy/checkstudy';

/**
 * Generated class for the MenuteacherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menuteacher',
  templateUrl: 'menuteacher.html',
})
export class MenuteacherPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuteacherPage');
  }
  QrScan(){
    this.navCtrl.push(QrScanPage)
  }
  Checkstudy(){
    this.navCtrl.push(CheckstudyPage)
  }
  SaveSick(){
    this.navCtrl.push(SaveSickPage)
  }
  Studentview(){
    this.navCtrl.push(StudentviewPage)
  }






}
