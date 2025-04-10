import { Component,ViewChild, ElementRef } from '@angular/core';
import { NavController,Platform,LoadingController,IonSlides,ToastController,AlertController } from '@ionic/angular';
import { ServerService } from '../service/server.service';
import { ActivatedRoute } from '@angular/router';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@awesome-cordova-plugins/native-geocoder/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';

declare var google;


@Component({
  selector: 'app-detail',
  templateUrl: 'detail.page.html',
  styleUrls: ['detail.page.scss'],
})
export class DetailPage {

@ViewChild('map',{static:false}) mapElement: ElementRef;
@ViewChild('directionsPanel',{static:false}) directionsPanel: ElementRef;

data:any
text:any;
oid:any;
directionsService:any;
directionsDisplay:any;
intr:any;
fakeData = [1,2,3,4,5,6,7];
map:any;
address:any;
tm:any;
has_detail = false;

  constructor(public platform : Platform,
    public loadingController: LoadingController,
    public androidPermissions: AndroidPermissions,
    public diagnostic: Diagnostic,
    public server : ServerService,private nav: NavController,public toastController: ToastController,public alertController: AlertController,private route: ActivatedRoute,public geolocation: Geolocation,public nativeGeocoder: NativeGeocoder) {

  	this.oid = this.route.snapshot.paramMap.get('id');
    this.text    = JSON.parse(localStorage.getItem('app_text'));

  	this.intr = setInterval(() => {   
      this.checkperm();   
      this.loadData();
    },15000);
  }

  ngOnInit()
  {
    
  }

  ionViewWillLeave()
  {
    clearInterval(this.intr);
  }

  ionViewWillEnter()
  {
    this.checkperm();
    this.loadData();
  }

  checkperm(){
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
      result => 
      // alert("permission::::::" + result.hasPermission)
      {
        if(result.hasPermission){
          this.checkSetting();
          // clearInterval(this.intr);
        }
      }
      ,
      err => {}
    );
  }

  checkSetting() {
    this.diagnostic.isLocationEnabled().then((isEnabled) => {
      if (!isEnabled && this.platform.is('cordova')) {
        this.diagnostic.switchToLocationSettings();
      }
      else {
        this.loadData();
      }
    })
    this.loadData();
  }

showDetail()
{
  this.has_detail = this.has_detail == true ? false : true;
  this.loadMap();
}

async loadData()
{
  this.server.orderDetail(this.oid).subscribe((response:any) => {

    this.data = response.data;

    if(this.data.st == 2)
    {
       this.nav.navigateRoot('/home');
       this.presentToast(this.text.order_cancel_text);
    }

    console.log(this.data);

    this.loadMap();

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


  async loadMap() {

      var gmarkers = [];

      this.geolocation.getCurrentPosition().then((resp) => {
            
      let latLng = new google.maps.LatLng(this.data.lat,this.data.lng);
      let mapOptions = {
        center: latLng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  
      this.directionsService = new google.maps.DirectionsService;
      this.directionsDisplay = new google.maps.DirectionsRenderer;

      for(var i=0; i<gmarkers.length; i++){
        gmarkers[i].setMap(null);
    }

    if(this.data.st == 0 ||  this.data.st == 1)
    {
    	this.startNavigating(this.data.order.slat, this.data.order.slng);
    }
    else
    {
    	this.startNavigating(this.data.lat, this.data.lng);
    }
    
    }).catch((error) => {
      console.log('Error getting location', error);
    });    

  }

  startNavigating(lat,lng){

        this.directionsDisplay.setMap(this.map);
        this.directionsDisplay.setPanel(this.directionsPanel.nativeElement);


        this.directionsService.route({
        origin: {lat: parseFloat(lat), lng: parseFloat(lng)},
        destination: {lat: parseFloat(this.data.order.lat), lng: parseFloat(this.data.order.lng)},
            travelMode: google.maps.TravelMode['DRIVING']
        }, (res, status) => {

            if(status == google.maps.DirectionsStatus.OK){

                this.directionsDisplay.setDirections(res);

                var point = res.routes[ 0 ].legs[ 0 ];

                this.tm  = point.duration.text;

            } else {
                console.warn(status);
            }

        });

    }
}
