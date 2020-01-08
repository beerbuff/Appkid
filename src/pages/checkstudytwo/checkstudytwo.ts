import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


/**
 * Generated class for the CheckstudytwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkstudytwo',
  templateUrl: 'checkstudytwo.html',
})
export class CheckstudytwoPage {
  studentcheck = [];


  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
    this.loadstudentcheckData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckstudytwoPage');
  }
  loadstudentcheckData(){
    let url = "http://localhost/servicephp/getstudent2.php";
    this.http.get(url).subscribe((data: any) => {
      this.studentcheck = data.student;
      console.log(this.studentcheck);
    }, (error) => { console.log(error) });

  }


}
