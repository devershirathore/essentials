import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the Dashboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class Dashboard {
public photos: any;
public base64Image: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private alertCtrl: AlertController ) {
  }

ngOnInit(){
  this.photos=[];
}

takePhoto(){

  const options: CameraOptions = {
  quality: 50,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE,
  targetWidth: 450,
  targetHeight: 450,
}

this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64:
 this.base64Image = "data:image/jpeg;base64," + imageData;
 this.photos.push(this.base64Image);
 this.photos.reverse();
}, (err) => {
  console.log(err);
 // Handle error
});
}

deletePhoto(index){

    let confirm = this.alertCtrl.create({
      title: 'do u want to delete the picture',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'no',
          handler: () => {

          }
        },
        {
          text: 'yes',
          handler: () => {
          this.photos.splice(index,1);
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Dashboard');
  }}
