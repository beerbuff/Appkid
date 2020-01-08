import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuteacherPage } from '../pages/menuteacher/menuteacher';
import { MenuparentPage } from '../pages/menuparent/menuparent';
import { QrScanPage } from '../pages/qr-scan/qr-scan';
import { SaveSickPage } from '../pages/save-sick/save-sick';
import { StudentviewPage } from '../pages/studentview/studentview';
import { ActivityviewPage } from '../pages/activityview/activityview';
import { QrCodePaPage } from '../pages/qr-code-pa/qr-code-pa';
import { LoginPage } from '../pages/login/login';
import { WelcomePage } from '../pages/welcome/welcome';
import { BmiviewPage } from '../pages/bmiview/bmiview';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { CheckstudyPage } from '../pages/checkstudy/checkstudy';
import { MenuteachertwoPage } from '../pages/menuteachertwo/menuteachertwo';
import { MenuteacherthreePage } from '../pages/menuteacherthree/menuteacherthree';
import { QrScantwoPage } from '../pages/qr-scantwo/qr-scantwo';
import { CheckstudytwoPage } from '../pages/checkstudytwo/checkstudytwo';
import { SaveSicktwoPage } from '../pages/save-sicktwo/save-sicktwo';
import { StudentviewtwoPage } from '../pages/studentviewtwo/studentviewtwo';
import { QrScanthreePage } from '../pages/qr-scanthree/qr-scanthree';
import { CheckstudythreePage } from '../pages/checkstudythree/checkstudythree';
import { SaveSickthreePage } from '../pages/save-sickthree/save-sickthree';
import { StudentviewthreePage } from '../pages/studentviewthree/studentviewthree';
import { IonicStorageModule } from '@ionic/storage';
import { TestloginPage } from '../pages/testlogin/testlogin';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuteacherPage,
    MenuparentPage,
    QrScanPage,
    SaveSickPage,
    StudentviewPage,
    ActivityviewPage,
    QrCodePaPage,
    LoginPage,
    WelcomePage,
    BmiviewPage,
    CheckstudyPage,
    MenuteachertwoPage,
    MenuteacherthreePage,
    QrScantwoPage,
    CheckstudytwoPage,
    SaveSicktwoPage,
    StudentviewtwoPage,
    
    QrScanthreePage,
    CheckstudythreePage,
    SaveSickthreePage,
    StudentviewthreePage,
    TestloginPage,


    
    

    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
      NgxDatatableModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuteacherPage,
    MenuparentPage,
    QrScanPage,
    SaveSickPage,
    StudentviewPage,
    
    ActivityviewPage,
    
    QrCodePaPage,
    LoginPage,
    WelcomePage,
    BmiviewPage,
    CheckstudyPage,
    MenuteachertwoPage,
    MenuteacherthreePage,
    
    QrScantwoPage,
    CheckstudytwoPage,
    SaveSicktwoPage,
    StudentviewtwoPage,
    
    QrScanthreePage,
    CheckstudythreePage,
    SaveSickthreePage,
    StudentviewthreePage,
    TestloginPage,



    
    

    
  ],
  providers: [
    StatusBar,
    SplashScreen,QRScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}