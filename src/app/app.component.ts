import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'internatiolisation-demo';
  languageList = [ // <--- add this
    { code: 'http://localhost:4201/en', label: 'English' },
    { code: 'http://localhost:4200/es', label: 'Spanish' }
  ];
}
