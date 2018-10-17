import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the ServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage {
  form: FormGroup;
  service: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,
     private serviceProvider: ServicesProvider, private toastCtrl: ToastController) {
       this.service = this.navParams.data.service || { };
       this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.service.key],
      nome: [this.service.nome, Validators.required],
      preco: [this.service.preco, Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.serviceProvider.save(this.form.value)
        .then(() => {
          this.toastCtrl.create({ message: 'Serviço salvo com sucesso.', duration: 3000 }).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toastCtrl.create({ message: 'Erro ao salvar o Serviço.', duration: 3000 }).present();
          console.error(e);
        })
    }
  }

}