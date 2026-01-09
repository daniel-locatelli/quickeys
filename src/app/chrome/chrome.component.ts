
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { googleChrome } from '../constants';

@Component({
    selector: 'app-chrome',
    imports: [],
    templateUrl: './chrome.component.html',
    styleUrl: './chrome.component.css',
    host: {
        class: 'shortcuts',
    }
})
export class ChromeComponent implements AfterViewInit, OnInit {

  constructor (private title: Title, private meta: Meta, private constants: googleChrome){}

  ngOnInit() {
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
  
  @ViewChild('scroll') scrollElement: ElementRef | undefined;

  ngAfterViewInit(): void {
    if (this.scrollElement && this.scrollElement.nativeElement) {
      this.scrollElement.nativeElement.focus();
    }
  }

  tabAndWindow: Shortcut[] = [
    { key: 'Ctrl + N', command: 'Open a new window' },
    { key: 'Ctrl + Shift + N', command: 'Open a new window in Incognito mode' },
    { key: 'Ctrl + T', command: 'Open a new tab, and jump to it' },
    { key: 'Ctrl + Shift + T', command: 'Reopen previously closed tabs in the order they were closed' },
    { key: 'Ctrl + Tab, Ctrl + PgDn', command: 'Jump to the next open tab' },
    { key: 'Ctrl + Shift + Tab, Ctrl + PgUp', command: 'Jump to the previous open tab' },
    { key: 'Ctrl + 1 ... Ctrl + 8', command: 'Jump to a specific tab' },
    { key: 'Ctrl + 9', command: 'Jump to the rightmost tab' },
    { key: 'Alt + Home', command: 'Open your home page in the current tab' },
    { key: 'Alt + ←', command: 'Open the previous page from your browsing history in the current tab' },
    { key: 'Alt + →', command: 'Open the next page from your browsing history in the current tab' },
    { key: 'Ctrl + W, Ctrl + F4', command: 'Close the current tab' },
    { key: 'Ctrl + Shift + W, Alt + F4', command: 'Close the current window' },
    { key: 'Alt + Space N', command: 'Minimize the current window' },
    { key: 'Alt + Space X', command: 'Maximize the current window' },
    { key: 'Alt + F X', command: 'Quit Google Chrome' },
    { key: 'Ctrl + Shift + PgUp, Ctrl + Shift + PgDn', command: 'Move tabs right or left' },
  ];

  googleChromeFeatures: Shortcut[] = [
    { key: 'Alt + F, Alt + E', command: 'Open the Chrome menu' },
    { key: 'Ctrl + Shift + B', command: 'Show or hide the Bookmarks bar' },
    { key: 'Ctrl + Shift + O', command: 'Open the Bookmarks Manager' },
    { key: 'Ctrl + H', command: 'Open the History page in a new tab' },
    { key: 'Ctrl + J', command: 'Open the Downloads page in a new tab' },
    { key: 'Shift + Esc', command: 'Open the Chrome Task Manager' },
    { key: 'Shift + Alt + T', command: 'Set focus on the first item in the Chrome toolbar' },
    { key: 'F10', command: 'Set focus on the rightmost item in the Chrome toolbar' },
    { key: 'F6', command: 'Switch focus to unfocused dialog (if showing) and all toolbars' },
    { key: 'Ctrl + F, F3', command: 'Open the Find Bar to search the current page' },
    { key: 'Ctrl + G', command: 'Jump to the next match to your Find Bar search' },
    { key: 'Ctrl + Shift + G', command: 'Jump to the previous match to your Find Bar search' },
    { key: 'Ctrl + Shift + J, F12', command: 'Open Developer Tools' },
    { key: 'Ctrl + Shift + Delete', command: 'Open the Clear Browsing Data options' },
    { key: 'F1', command: 'Open the Chrome Help Center in a new tab' },
    { key: 'Ctrl + Shift + M', command: 'Log in a different user or browse as a Guest' },
    { key: 'Alt + Shift + I', command: 'Open a feedback form' },
    { key: 'F7', command: 'Turn on caret browsing' },
    { key: 'Ctrl + F6', command: 'Skip to web contents' },
    { key: 'Alt + Shift + A', command: 'Focus on inactive dialogs' },
  ];

  addressBar: Shortcut[] = [
    { key: 'Search term + Enter', command: 'Search with your default search engine' },
    { key: 'Search engine name and press Tab', command: 'Search using a different search engine' },
    {
      key: 'Site name + Ctrl + Enter',
      command: 'Add www. and .com to a site name, and open it in the current tab',
    },
    {
      key: 'Site name + Ctrl + Shift + Enter',
      command: 'Add www. and .com to a site name, and open it in a new window',
    },
    { key: 'Search term + Alt + Enter', command: 'Google search in new tab' },
    { key: 'Ctrl + L, Alt + D, F6', command: 'Jump to the address bar' },
    { key: 'Ctrl + K, Ctrl + E', command: 'Search from anywhere on the page' },
    { key: '↓ + Shift + Delete', command: 'Remove predictions from address bar' },
    { key: 'Ctrl + F5', command: 'Move cursor to the address bar' },
  ];

  webpage: Shortcut[] = [
    { key: 'Ctrl + P', command: 'Open options to print the current page' },
    { key: 'Ctrl + S', command: 'Open options to save the current page' },
    { key: 'F5, Ctrl + R', command: 'Reload the current page' },
    { key: 'Shift + F5, Ctrl + Shift + R', command: 'Reload the current page, ignoring cached content' },
    { key: 'Esc', command: 'Stop the page loading' },
    { key: 'Tab', command: 'Browse clickable items moving forward' },
    { key: 'Shift + Tab', command: 'Browse clickable items moving backward' },
    { key: 'Ctrl + O + Select a file', command: 'Open a file from your computer in Chrome' },
    { key: 'Ctrl + U', command: 'Display non-editable HTML source code for the current page' },
    { key: 'Ctrl + D', command: 'Save your current webpage as a bookmark' },
    { key: 'Ctrl + Shift + D', command: 'Save all open tabs as bookmarks in a new folder' },
    { key: 'F11', command: 'Turn full-screen mode on or off' },
    { key: 'Ctrl + +', command: 'Make everything on the page bigger' },
    { key: 'Ctrl + -', command: 'Make everything on the page smaller' },
    { key: 'Ctrl + 0', command: 'Return everything on the page to default size' },
    { key: 'Space, PgDn', command: 'Scroll down a webpage, a screen at a time' },
    { key: 'Shift + Space, PgUp', command: 'Scroll up a webpage, a screen at a time' },
    { key: 'Home', command: 'Go to the top of the page' },
    { key: 'End', command: 'Go to the bottom of the page' },
    { key: 'Shift + Scroll your mousewheel', command: 'Scroll horizontally on the page' },
    { key: 'Ctrl + ←', command: 'Move your cursor to the beginning of the previous word in a text field' },
    { key: 'Ctrl + →', command: 'Move your cursor to the next word' },
    { key: 'Ctrl + Backspace', command: 'Delete the previous word in a text field' },
    { key: 'Alt + Home', command: 'Open the Home page in the current tab' },
  ];

  mouse: Shortcut[] = [
    { key: 'Drag a link to a tab', command: 'Open link in current tab (mouse only)' },
    { key: 'Ctrl + Click a link', command: 'Open link in new background tab' },
    { key: 'Ctrl + Shift + Click a link', command: 'Open link, and jump to it' },
    { key: 'Drag a link to a blank area of the tab strip', command: 'Open link, and jump to it (mouse only)' },
    { key: 'Shift + Click a link', command: 'Open link in a new window' },
    { key: 'Drag the tab out of the tab strip', command: 'Open tab in a new window (mouse only)' },
    { key: 'Drag the tab into an existing window', command: 'Move tab to a current window (mouse only)' },
    { key: 'Press Esc while dragging', command: 'Return tab to original position' },
    { key: 'Drag the web address to the Bookmarks Bar', command: 'Save current webpage as a bookmark' },
    { key: 'Shift + Scroll your mousewheel', command: 'Scroll horizontally on the page' },
    { key: 'Alt + Click a link', command: 'Download the target of a link' },
    { key: 'Right-click ← / click & hold ←', command: 'Display your browsing history' },
    { command: 'Display your browsing history', key: 'Right-click Next Next or click & hold Next Next' },
    { command: 'Switch between maximized and windowed modes', key: 'Double-click a blank area of the tab strip' },
    { command: 'Make everything on the page bigger', key: 'Ctrl + Scroll your mousewheel up' },
    { command: 'Make everything on the page smaller', key: 'Ctrl + Scroll your mousewheel down' },
  ];
}
