import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private name1: string = '';
  private name2: string = '';

  get score() {
    const letters = (this.name1 + this.name2).toLowerCase();
    let sum = 0;
    for (let i = 0; i<letters.length; i++) {
      sum += letters.charCodeAt(i);
    }
    return sum % 101;
  }

}
