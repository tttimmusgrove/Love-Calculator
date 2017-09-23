import { Component } from '@angular/core';
import { Contacts } from '@ionic-native/contacts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private name1: string = '';
  private name2: string = '';

  constructor(
    private contacts: Contacts
  ) {

  }

  get score() {
    const letters = (this.name1 + this.name2).toLowerCase();
    let sum = 0;
    for (let i = 0; i<letters.length; i++) {
      sum += letters.charCodeAt(i);
    }
    return sum % 101;
  }

  pickContact1() {
    this.contacts.pickContact()
    .then((contact) => {
      this.name1 = contact.displayName;
    })
    .catch(error => {
      // ignore; user didn't select a contact
    })
  }

  pickContact2() {
    this.contacts.pickContact()
    .then((contact) => {
      this.name2 = contact.displayName;
    })
    .catch(error => {
      // ignore; user didn't select a contact
    })
  }

}
