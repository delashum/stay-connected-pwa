import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModelService } from 'src/app/core/services/model.service';
import { Contact } from 'src/app/models';
import { AddContactComponent } from './add-contact/add-contact.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  contacts: Contact[] = [];
  constructor(public _modal: ModalController, private _model: ModelService) {
    this._model.contact_list().then(contacts => {
      this.contacts = contacts;
    });
  }

  async add_contact() {
    const modal = await this._modal.create({
      component: AddContactComponent,
    });
    return await modal.present();
  }
}
