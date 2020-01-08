import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';



/**
 * Generated class for the CheckstudythreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkstudythree',
  templateUrl: 'checkstudythree.html',
})
export class CheckstudythreePage {
  studentcheck = [];


  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
    this.loadstudentcheckData();
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckstudythreePage');
  }

  loadstudentcheckData(){
    let url = "http://localhost/servicephp/getstudent3.php";
    this.http.get(url).subscribe((data: any) => {
      this.studentcheck = data.student;
      console.log(this.studentcheck);
    }, (error) => { console.log(error) });

  }

}//end class
