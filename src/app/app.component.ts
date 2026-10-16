import { Component } from '@angular/core';import { RouterOutlet } from '@angular/router';import { HeaderComponent,FooterComponent,ToastComponent } from './shared.component';
@Component({selector:'app-root',standalone:true,imports:[RouterOutlet,HeaderComponent,FooterComponent,ToastComponent],template:`<fk-header/><router-outlet/><fk-footer/><fk-toast/>`})export class AppComponent{}
