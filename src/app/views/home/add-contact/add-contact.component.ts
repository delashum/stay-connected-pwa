import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModelService } from 'src/app/core/services/model.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent implements OnInit {
  name: string;
  frequency = 30;
  constructor(public _modal: ModalController, private _model: ModelService) {}

  ngOnInit() {}

  save() {
    if (this.name) {
      this._model.add_contact(this.name, this.frequency);
      this.close();
    }
  }
  close() {
    this._modal.dismiss();
  }
}
