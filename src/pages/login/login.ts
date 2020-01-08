import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuteacherPage } from '../menuteacher/menuteacher';
import { MenuparentPage } from '../menuparent/menuparent';
import { MenuteacherthreePage } from '../menuteacherthree/menuteacherthree';
import { MenuteachertwoPage } from '../menuteachertwo/menuteachertwo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  data: Observable<any>;

  loginResult: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  Testlog(username, password) {

    var url = 'http://127.0.0.1/servicephp/getteacher.php?username=' + username + '&password=' + password;
    console.log(url);
    this.data = this.http.get(url, username);
    this.data = this.http.get(url, password);

    this.data.subscribe(data => {

      console.log(data.teacher_id);
      if (data.teacher_id == null) {
        alert("ไม่มีusernameนี้ในระบบ");
      } else if (data.grade == '1') {
        alert(data.grade);
        this.navCtrl.push(MenuteacherPage);
      } else if (data.grade == '2') {
        alert(data.grade);
        this.navCtrl.push(MenuteachertwoPage);
      } else if (data.grade == '3') {
        alert(data.grade);
        this.navCtrl.push(MenuteacherthreePage);
      } else {
        
        this.loginResult = "Faild";
      }

      console.log(data);


    });
  }

  // login(_username, _password) {
  //   alert('Please User,Password ' + _username + _password);
  //   if (_password == '1') {
  //     this.loginResult = "Pass";
  //     this.navCtrl.push(MenuteacherPage);
  //   } else if (_password == '2') {
  //     this.loginResult = "Pass";
  //     this.navCtrl.push(MenuteachertwoPage)
  //   } else if (_password == '3') {
  //     this.loginResult = "Pass";
  //     this.navCtrl.push(MenuteacherthreePage)
  //   } else {
  //     this.loginResult = "Faild";

  //   }
  // }

}//end class