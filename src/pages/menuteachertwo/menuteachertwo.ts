import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QrScantwoPage } from '../qr-scantwo/qr-scantwo';
import { CheckstudytwoPage } from '../checkstudytwo/checkstudytwo';
import { SaveSicktwoPage } from '../save-sicktwo/save-sicktwo';
import { StudentviewtwoPage } from '../studentviewtwo/studentviewtwo';

/**
 * Generated class for the MenuteachertwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menuteachertwo',
  templateUrl: 'menuteachertwo.html',
})
export class MenuteachertwoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuteachertwoPage');
  }
  QrScantwo(){
    this.navCtrl.push(QrScantwoPage)
  }
  Checkstudytwo(){
    this.navCtrl.push(CheckstudytwoPage)
  }
  SaveSicktwo(){
    this.navCtrl.push(SaveSicktwoPage)
  }
  Studentviewtwo(){
    this.navCtrl.push(StudentviewtwoPage)
  }

}// end class
