import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from '../service/server.service';
import { ToastController,NavController,Platform,LoadingController,AlertController } from '@ionic/angular';
import { Clipboard } from '@awesome-cordova-plugins/clipboard/ngx';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})

export class AccountPage implements OnInit {
  
  data:any;
  text:any;
  
  slideOption = {
    initialSlide: 0,
    slidesPerView: 1.2,
    loop: false,
    centeredSlides: false,
    autoplay:false,
    speed: 500,
    spaceBetween:0,

  }

  constructor(private alertController: AlertController,private clipboard: Clipboard,private route: ActivatedRoute,public server : ServerService,public toastController: ToastController,private nav: NavController,public loadingController: LoadingController){

  this.text = JSON.parse(localStorage.getItem('app_text'));
  }

  ngOnInit()
  {
  }

  ionViewWillEnter()
  {
    if(localStorage.getItem('user_id') == 'null' || !localStorage.getItem('user_id') || localStorage.getItem('user_id') == undefined)
    {
      this.presentToast(this.text.access_page);

      this.nav.navigateRoot('/home');
    }
    else
    {
      this.loadData();
    }
  }

async loadData()
{
  const loading = await this.loadingController.create({
    message: '',
    spinner:'bubbles'
    });
    await loading.present();

    this.server.userInfo(localStorage.getItem('user_id')).subscribe((response:any) => {

    this.data = response.data;

    localStorage.setItem('user_data', JSON.stringify(response.data));

    loading.dismiss();

    });
  }

  async presentToast(txt) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 3000,
      position : 'top',
      mode:'ios',
      color:'dark'
    });
    toast.present();
  }

logout()
{
  localStorage.setItem('user_id',null);
  localStorage.setItem('user_data',null);

  this.nav.navigateRoot('/home');
}

copyData(c)
{
  this.clipboard.copy(c);

  console.log(c);

  this.presentToast("Referral code copied successfully.");
}

async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Are you sure?',
      message : 'Want to delete your account? Your all data, order history will be removed and you will not be able to undo.',
      mode:'ios',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          },
        },
        {
          text: 'Yes Delete!',
          role: 'confirm',
          handler: () => {

          this.delete();

          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

async delete()
{
  const loading = await this.loadingController.create({
    message: '',
    spinner:'bubbles'
    });
    await loading.present();

    this.server.delete().subscribe((response:any) => {

    this.presentToast("Account deleted successfully.");

    localStorage.setItem('user_id',null);
    localStorage.setItem('user_data',null);

    this.nav.navigateRoot('/home');

    loading.dismiss();

    });
  }
}
