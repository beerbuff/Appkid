import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuparentPage } from '../menuparent/menuparent';


/**
 * Generated class for the TestloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-testlogin',
  templateUrl: 'testlogin.html',
})
export class TestloginPage {
  username:string;
  password:string;
  key:string = 'username';
  keytwo:string = 'password';
  data: Observable<any>;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage,public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestloginPage');
  }

  
Testlog(username,password){
 
  var url = 'http://127.0.0.1/servicephp/getparent.php?username='+username+'&password='+password;
  console.log(url);
  this.data = this.http.get(url,username);
  this.data = this.http.get(url,password);

  this.data.subscribe(data => {
   
    console.log(data.qrId);
  if(data.qrId == null){
       alert("ไม่มีusernameนี้ในระบบ");

   }else{
      alert(username);
      this.navCtrl.push(MenuparentPage);
   }
  
    console.log(data);
   
  
  });
}
    
 
// login(_username, _password) {
//   alert('Please User,Password ' + _username + _password);
//   if (_password == '3001569') {
//     this.loginResult = "Pass";
//     this.navCtrl.push(MenuparentPage);
//   }else {
//     this.loginResult = "Faild";

//   }
// }

  Savelogin(){
    
    this.storage.set(this.key, this.username);
    this.storage.set(this.keytwo, this.password);
    this.storage.get('username').then((val) => {
      console.log('username is', val);
    });

    this.storage.get('password').then((val) => {
      console.log('password is', val);
    });
    
  }

 
}//end class
