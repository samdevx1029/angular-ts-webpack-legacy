import { Component } from '@angular/core';

import '../../public/css/styles.css';
import '../../node_modules/primeng/resources/themes/omega/theme.css';
import '../../node_modules/primeng/resources/primeng.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../src/app/favicon.ico';

import { MenubarModule, MenuItem } from 'primeng/primeng';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-root',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')]
})
export class AppComponent {
  title = 'My App';
}
