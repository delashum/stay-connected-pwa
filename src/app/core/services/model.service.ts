import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Contact, ContactGroup, create_contact, create_group } from 'src/app/models';

@Injectable({
  providedIn: 'root',
})
export class ModelService {
  private _contacts: Contact[];
  private _groups: ContactGroup[];
  private _is_init: Promise<void>;
  constructor(private _storage: Storage) {
    this.init_data();
  }

  add_contact(name: string, frequency: number) {
    this._contacts = [...this._contacts, create_contact(name, frequency)];
    this.update_contacts();
  }
  delete_contact(id: string) {
    this._contacts = this._contacts.filter(e => e.id !== id);
    this.update_contacts();
  }
  update_contact(contact: Contact) {
    const updated_contact = { ...contact };
    const without_update = this._contacts.filter(e => e.id !== contact.id);
    this._contacts = [...without_update, updated_contact];
    this.update_contacts();
  }
  get_contact(id: string) {
    return this._is_init.then(() => this._contacts.find(e => e.id === id));
  }
  contact_list() {
    return this._is_init.then(() => [...this._contacts]);
  }

  add_group(name: string) {
    this._groups = [...this._groups, create_group(name)];
    this.update_groups();
  }
  group_list() {
    return this._is_init.then(() => [...this._groups]);
  }

  private update_contacts() {
    this._storage.set('contacts', this._contacts);
  }

  private update_groups() {
    this._storage.set('groups', this._groups);
  }

  private init_data() {
    const get_contacts = this._storage.get('contacts').then(contacts => {
      this._contacts = contacts || [];
    });
    const get_groups = this._storage.get('groups').then(groups => {
      this._groups = groups || [];
    });
    this._is_init = Promise.all([get_contacts, get_groups]).then(() => null);
  }
}
