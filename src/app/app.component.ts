import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Sumadora', url: '/sumadora', icon: 'add' },
    { title: 'Convertidor', url: '/numeroletra', icon: 'swap-vertical' },
    { title: 'Tabla', url: '/tabla', icon: 'calculator' },
    { title: 'Video', url: '/video', icon: 'caret-forward-circle' },
    
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
