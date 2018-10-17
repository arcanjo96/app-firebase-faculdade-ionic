import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ServicesProvider } from '../../providers/services/services';
import { ServicesPage } from '../services/services';

/**
 * Generated class for the ListServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-services',
  templateUrl: 'list-services.html',
})
export class ListServicesPage {

  services: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private serviceProvider: ServicesProvider, private toastCtrl: ToastController) {
    this.services = this.serviceProvider.getAll();
  }

  newService() {
    this.navCtrl.push(ServicesPage);
  }

  editService(services: any) {
    // Maneira 1
    this.navCtrl.push(ServicesPage, { service: services });

    // Maneira 2
    // this.navCtrl.push('ContactEditPage', { key: contact.key });
  }

  removeService(key: string) {
    if (key) {
      this.serviceProvider.remove(key)
        .then(() => {
          this.toastCtrl.create({ message: 'Serviço removido sucesso.', duration: 3000 }).present();
        })
        .catch(() => {
          this.toastCtrl.create({ message: 'Erro ao remover o Serviço.', duration: 3000 }).present();
        });
    }
  }

}
