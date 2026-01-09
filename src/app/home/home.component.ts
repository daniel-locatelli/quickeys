
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { home } from '../constants';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    imports: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    host: {
        '(window:resize)': 'onWindowResize($event)',
        class: 'home',
    }
})
export class HomeComponent implements AfterViewInit, OnInit {

  constructor( private title: Title, private meta: Meta, private constants: home){}

  public screenWidth!: number;

  ngOnInit() {
    this.screenWidth = window.innerWidth;

    this.title.setTitle(this.constants.title);
    this.meta.updateTag({ name: 'description', content: this.constants.description });
    this.meta.updateTag({ property: 'og:url', content: this.constants.url });
    this.meta.updateTag({ property: 'og:title', content: this.constants.title });
    this.meta.updateTag({ property: 'og:description', content: this.constants.description });
    this.meta.updateTag({ property: 'og:image', content: this.constants.image });
    this.meta.updateTag({ property: 'twitter:card', content: this.constants.twitterCard });
    this.meta.updateTag({ property: 'twitter:url', content: this.constants.url });
    this.meta.updateTag({ property: 'twitter:title', content: this.constants.title });
    this.meta.updateTag({ property: 'twitter:description', content: this.constants.description });
    this.meta.updateTag({ property: 'twitter:image', content: this.constants.image });
  }

  onWindowResize(_: Event) {
    this.screenWidth = window.innerWidth;
  }

  isMobile(screenWidth: number) {
    return screenWidth <= 700;
  }

  @ViewChild('scroll') scrollElement: ElementRef | undefined;

  ngAfterViewInit(): void {
    if (this.scrollElement && this.scrollElement.nativeElement) {
      this.scrollElement.nativeElement.focus();
    }
  }

}
