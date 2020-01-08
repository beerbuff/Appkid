import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuteacherPage } from '../menuteacher/menuteacher';
import { MenuparentPage } from '../menuparent/menuparent';







@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


   loginResult: string;
  constructor(public navCtrl: NavController,public navParams: NavParams ) {
  }



 
signIn(_username, _password) {
  alert('hello ' + _username + _password);
  if (_password == '1234') {
    this.loginResult = "Pass";
    this.navCtrl.push(MenuteacherPage);
  }else if(_password == '3001569'){
    this.loginResult = "Pass";
    this.navCtrl.push(MenuparentPage);
  } 
  else {
    this.loginResult = "Faild";

  }
}



}//end class
