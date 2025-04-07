import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from '../service/server.service';
import { ToastController,NavController,Platform,LoadingController,AlertController } from '@ionic/angular';

@Component({
  selector: 'app-my',
  templateUrl: './my.page.html',
  styleUrls: ['./my.page.scss'],
})

export class MyPage implements OnInit {
  
  data:any;
  udata:any;
  text:any;
  oid:any;

  constructor(private route: ActivatedRoute,public server : ServerService,public toastController: ToastController,private nav: NavController,public loadingController: LoadingController,public alertController: AlertController){

  this.text = JSON.parse(localStorage.getItem('app_text'));

   if(localStorage.getItem('user_data') && localStorage.getItem('user_data') != undefined)
   {
     this.udata = JSON.parse(localStorage.getItem('user_data'));
   }

  }

  ngOnInit()
  {
    if(this.udata && this.udata.phone)
    {
      this.loadData();
    }
  }

  show(id)
  {
    this.oid = this.oid == id ? null : id;
  }
 
  ionViewWillEnter()
  {
  	
  }

  getTotalPrice(curruncy ,payable, tip) {
    console.log((payable + tip));
    return curruncy+(Number(payable) + Number(tip));
  }

  async loadData()
  {	
  	console.log("loading");

    const loading = await this.loadingController.create({
      message: '',
      spinner : 'bubbles'
      
    });
    await loading.present();

    this.server.my(localStorage.getItem('user_id')).subscribe((response:any) => {

      
  
    this.data = response.data;
      let sub_total = 0;
      for(let i=0; i< this.data?.length; i++){
        if (this.data[i]?.items?.length > 0) {
          for (let j = 0; j < this.data[i]?.items?.length; j++) {
            sub_total += this.data[i]?.items[j]?.price * this.data[i]?.items[j]?.qty;
          }
          Object.assign(this.data[i], {"sub_total" : sub_total});
        }
        sub_total = 0;
      }
      // (this.data).filter((item) => {
      //     sub_total += item.items.price * item.items.qty ;
      //     console.log(sub_total);
      // });
      // this.data[0].push({"sub_total" : sub_total});
      
    // }
    console.log(this.data);

    loading.dismiss();

    }, (error) => {
      loading.dismiss();
      console.log(error.toString())
   });
  }

  async cancelOrder(id)
  { 
    console.log("loading");

    const loading = await this.loadingController.create({
      message: '',
      spinner : 'bubbles'
      
    });
    await loading.present();

    this.server.cancelOrder(id).subscribe((response:any) => {
  
    this.data = response.data;

    console.log(response.data);

    loading.dismiss();

    },(error) => {
      loading.dismiss();
      console.log(error.toString())
   });
  }

  async presentAlertConfirm(id) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Are you sure?',
      message: 'Want to cancel this order?',
      mode:'ios',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
          
          this.cancelOrder(id);

          }
        }
      ]
    });

    await alert.present();
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
}
