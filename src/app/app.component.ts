import { Component } from '@angular/core';

import '../../public/css/styles.css';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-root',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')]
})
export class AppComponent {
  title = 'my app works real good!';
}
