import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarmobileComponent } from './navbarmobile/navbarmobile.component';

@Component({
    selector: 'app-root',
    imports: [CommonModule, RouterOutlet, NavbarComponent, NavbarmobileComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    host: {
        '(window:resize)': 'onWindowResize($event)',
        '(document:keydown)': 'handleKeyboardEvent($event)',
    }
})
export class AppComponent {
  // https://angular.dev/guide/components/host-elements

  // This part is to control if either the normal navbar or the navbarmobile shoulf be loaded
  // See also the host up
  public screenWidth!: number;

  ngOnInit() {
    this.screenWidth = window.innerWidth;
  }
  
  onWindowResize() {
    this.screenWidth = window.innerWidth;
  }

  isMobile(screenWidth: number){
    return screenWidth < 700
  }

  // This part is to control the behaviour of the shortcuts
  // See also the host up
  constructor(private router: Router) {}

  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
      case 'q':
        this.router.navigate(['/']);
        event.preventDefault();
        break;
      case '1':
        this.router.navigate(['/bash']);
        event.preventDefault();
        break;
      case '2':
        this.router.navigate(['/windows']);
        event.preventDefault();
        break;
      case '3':
        this.router.navigate(['/git']);
        event.preventDefault();
        break;
      case '4':
        this.router.navigate(['/vscode']);
        event.preventDefault();
        break;
      case '5':
        this.router.navigate(['/chrome']);
        event.preventDefault();
        break;
      case '6':
        this.router.navigate(['/chromedev']);
        event.preventDefault();
        break;
      case '7':
        this.router.navigate(['/premierepro']);
        event.preventDefault();
        break;
      case '8':
        this.router.navigate(['/aftereffects']);
        event.preventDefault();
        break;
    }
  }
}
