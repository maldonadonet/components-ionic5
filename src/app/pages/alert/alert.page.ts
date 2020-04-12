import { Component, OnInit } from '@angular/core';
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo:string = 'Alert Page';

  constructor( private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (data) => {
            console.log('Cancelar selected');
          }
        },
        {
          text: 'Ok',
          handler: (data) => {
            console.log('Acepted selected');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Curso Ionic 5',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Ingresar nombre de Página'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok', data);
            this.titulo = data.nombre;
          }
        }
      ]
    });

    await alert.present();
  }

}
