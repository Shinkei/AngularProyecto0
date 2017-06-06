import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aplicacion proyecto 0';
  author = 'Shinkei';
  count = 0;
  imageSrc = './../favicon.ico';
  enableInput = true;
}
