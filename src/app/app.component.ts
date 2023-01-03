import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  title = 'code of code';
  count = 0;
  displayValue: string = '';
  getData(username: string) {
    this.displayValue = username;
  }
  counter(type: string) {
    type == 'add' ? this.count++ : this.count--;
  }
}
